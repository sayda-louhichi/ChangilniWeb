const express = require("express");
const router = express.Router();
const Releve = require("../model/releve.model");
const middleware = require("../middleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploadsReleve");
  },
  filename: (req, file, cb) => {
    cb(null, req.params.id + ".jpg");
   
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 6,
  },
 
});
router
  .route("/add/coverImage/:id")
  .patch(middleware.checkToken, upload.single("img"), (req, res) => {
    Releve.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          coverImage: req.file.path,
        },
      },
      { new: true },
      (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
      }
    );
  });
router.route("/Add").post(middleware.checkToken, (req, res) => {
    const releve = Releve({
      email: req.decoded.email,
      name:req.body.name,
      immatriculation: req.body.immatriculation,
      adress: req.body.adress,
      parc:req.body.parc,
    });
    releve
    .save()
    .then((result) => {
      res.json({ data: result["_id"] });
    })
    .catch((err) => {
      console.log(err), res.json({ err: err });
    });
});
router.route("/getReleve").get(middleware.checkToken, (req, res) => {
  Releve.find({ email: req.decoded.email }, (err, result) => {
    if (err) return res.json(err);
    return res.json({ data: result });
  });
});

router.route("/delete/:id").delete(middleware.checkToken, (req, res) => {
  Releve.findOneAndDelete(
    {
      $and: [{ email: req.decoded.email }, { _id: req.params.id }],
    },
    (err, result) => {
      if (err) return res.json(err);
      else if (result) {
        console.log(result);
        return res.json("Relevé deleted");
      }
      return res.json("Relevé not deleted");
    }
  );
});






module.exports = router;