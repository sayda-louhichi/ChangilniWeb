const express = require("express");
const User = require("../model/user.model");
const config = require("../config");
const jwt = require("jsonwebtoken");
let middleware = require("../middleware");
const router = express.Router();

router.route("/:email").get(middleware.checkToken, (req, res) => {
  User.findOne({ email: req.params.email }, (err, result) => {
    if (err) return res.status(500).json({ msg: err });
    return res.json({
      data: result,
      username: req.params.username,
    });
  });
});

router.route("/checkuser/:email").get((req, res) => {
  User.findOne({ email: req.params.email }, (err, result) => {
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

router.route("/login").post((req, res) => {
  User.findOne({email: req.body.email }, (err, result) => {
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
/*router.post('/login',(req, res, next)=>{
  const email = req.body.email;
  const password = req.body.password;

  const query={email}
  //utilisateur existe 
  User.findOne(query,(err,user)=>{
      if(err){
          return res.send({
              success: false,
              message:'Error, please try again'
          });
      }
      if(!user){
          return res.send({
              success: false,
              message:'Eror, Account not found'
          });
      }
          let returnUser ={
              username:user.username,
              email :user.email,
            
          }
          return res.send({
              success: true,
              message:'you can login now',
              user: returnUser,
              token : user.generateAuthToken(),
          });
      });
  });

 */

router.route("/register").post((req, res) => {
  console.log("inside the register");
  const client = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
client.save()
   .then(() => {
    let token = jwt.sign({ email: req.body.email }, config.key, {});
      console.log("user registered");
      res.json({ msg: "User Successfully Registered" ,token:token});
    })
    
    .catch((err) => {
      res.status(403).json({ msg: err });
    });
});


router.route("/update/:email").patch((req, res) => {
  console.log(req.params.email);
  User.findOneAndUpdate(
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
  User.findOneAndDelete({ email: req.params.email }, (err, result) => {
    if (err) return res.status(500).json({ msg: err });
    const msg = {
      msg: "User deleted",
      email: req.params.email,
    };
    return res.json(msg);
  });
});

module.exports = router;