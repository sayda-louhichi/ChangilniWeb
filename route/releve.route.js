const express = require("express");
const router = express.Router();
const Releve = require("../model/releve.model");
const middleware = require("../middleware");
const multer = require("multer");


router.route("/Add").post(middleware.checkToken, (req, res) => {
    const releve = Releve({
      email: req.decoded.email,
      immatriculation: req.body.immatriculation,
      adress: req.body.adress,
    });
    releve
      .save()
      .then((result) => {
        res.json({ data: result}).catch((err) => {
        console.log(err), res.json({ err: err });
      });
  });
});






module.exports = router;