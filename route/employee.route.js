const express = require("express");
const router = express.Router();
const Employee = require("../model/employee.model");
const config = require("../config");
const jwt = require("jsonwebtoken");
let middleware = require("../middleware");

router.route("/register").post((req, res) => {
    console.log("inside the register");
    const employee = new Employee({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      cin:req.body.cin,
    
    });
  employee.save()
   
     .then(() => {
        console.log("employee registered");
        res.status(200).json({ msg: "Employee Successfully Registered" });
      })
      .catch((err) => {
        res.status(403).json({ msg: err });
      });
  });

  router.route("/login").post((req, res) => {
    Employee.findOne({email: req.body.email }, (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      if (result === null) {
        return res.status(403).json("email incorrect");
      }
      if (result.password === req.body.password) {
        // here we implement the JWT token functionality
        let token = jwt.sign({ email: req.body.email }, config.key, {});
  
        res.json({
          token: token,
          msg: "success",
        });
      } else {
        res.status(403).json("password is incorrect");
      }
    });
  });
  
  router.route("/:email").get(middleware.checkToken, (req, res) => {
    Employee.findOne({ email: req.params.email }, (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      return res.json({
        data: result,
        username: req.params.username,
      });
    });
  });
  
  router.route("/checkuser/:email").get((req, res) => {
    Employee.findOne({ email: req.params.email }, (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      if (result !== null) {
        return res.json({
          Status: true,
        });
      } else
        return res.json({
          Status: false,
        });
    });
  });
  
  
  
  
  router.route("/update/:email").patch((req, res) => {
    console.log(req.params.email);
    Employee.findOneAndUpdate(
      { email: req.params.email },
      { $set: { password: req.body.password } },
      (err, result) => {
        if (err) return res.status(500).json({ msg: err });
        const msg = {
          msg: "password successfully updated",
          email: req.params.email,
        };
        return res.json(msg);
      }
    );
  });
  
  router.route("/delete/:email").delete(middleware.checkToken, (req, res) => {
    Employee.findOneAndDelete({ email: req.params.email }, (err, result) => {
      if (err) return res.status(500).json({ msg: err });
      const msg = {
        msg: "User deleted",
        email: req.params.email,
      };
      return res.json(msg);
    });
  });
  
module.exports = router;