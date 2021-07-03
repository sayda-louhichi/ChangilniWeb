const express = require("express");
const Profile = require("../model/profile.model");
let middleware = require("../middleware");
const multer = require("multer")
const router = express.Router();
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, req.decoded.email + ".jpg");
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 6,
  },
 //fileFilter: fileFilter,
});

//ajout image profile

router
  .route("/add/image")
  .patch(middleware.checkToken, upload.single("img"), (req, res) => {
    Profile.findOneAndUpdate(
      { email: req.decoded.email },
      {
        $set: {
          img: req.file.path,
        },
      },
      { new: true },
      (err, profile) => {
        if (err) return res.status(500).send(err);
        const response = {
          message: "image added successfully updated",
          data: profile,
        };
        return res.status(200).send(response);
      }
    );
  });


router.route("/add").post(middleware.checkToken, (req, res) => {
    const profile = Profile({
    email:req.decoded.email,
      username: req.body.username,
      cin: req.body.cin,
      tel:req.body.tel,
     adress:req.body.adress,
      
    });
    profile
      .save()
      .then(() => {
        return res.json({ msg: "profile successfully stored" });
      })
      .catch((err) => {
        return res.status(400).json({ err: err });
      });
  });
  router.route("/checkProfile").get(middleware.checkToken,(req,res)=>{
    Profile.findOne({email:req.decoded.email},(err,result)=>{
      if(err) return res.json({err: err});
      else if(result==null){
        return res.json({status:false});
      }
      else{
        return res.json({status:true});
      }
    })
  });
  router.route("/getData").get(middleware.checkToken, (req, res) => {
   Profile.findOne({ email: req.decoded.email }, (err, result) => {
      if (err) return res.json({ err: err });
      if (result == null) return res.json({ data: [] });
      else return res.json({ data: result });
    });
  });



  router.route("/update").patch(middleware.checkToken, async (req, res) => {
    let profile = {};
    await Profile.findOne({email: req.decoded.email}, (err, result) => {
      if (err) {
        profile = {};
      }
      if (result != null) {
        profile = result;
      }
    });
    Profile.findOneAndUpdate({ email: req.decoded.email},
      {
        $set: {
          username: req.body.username ? req.body.username : profile.username,
          tel: req.body.tel ? req.body.tel : profile.tel,
          cin: req.body.cin ? req.body.cin : profile.cin,
          adress: req.body.adress ? req.body.adress : profile.adress,
        },
      },
      { new: true },
      (err, result) => {
        if (err) return res.json({ err: err });
        if (result == null) return res.json({ data: [] });
        else return res.json({ data: result });
      }
    );
  });

  module.exports = router;