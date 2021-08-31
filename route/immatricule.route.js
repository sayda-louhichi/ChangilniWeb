const express = require('express');
const router = express.Router();
const Immatricule = require("../model/immatricule.model");
let middleware = require("../middleware");
const { checkToken } = require('../middleware');

//get immatriculation
router.route("/getDataImma").get(middleware.checkToken, (req, res) => {
  Immatricule.findOne({ email:req.decoded.email}, (err, result) => {
     if (err) return res.json({ err: err });
     if (result == null) return res.json({ data: [] });
     else return res.json({ data: result });
   });
 });
     
 
//ajout info
router.route("/add").post(middleware.checkToken, (req, res) => {
    const immatricule = new Immatricule({
    email:req.decoded.email,
      immatriculation: req.body.immatriculation,
      
      
    });
    immatricule
      .save()
      .then(() => {
        return res.json({ msg: "immatriculation successfully stored" });
      })
      .catch((err) => {
        return res.status(400).json({ err: err });
      });
  });
//listes des immatriculations

router.route("/getOwnImmatriculation").get(middleware.checkToken, (req, res) => {
    Immatricule.find({email:req.decoded.email}, (err, result) => {
    if (err) return res.json(err);
    return res.json({ data: result });
  });
});

 
router.route("/getallImma").get(middleware.checkToken, (req, res) => {
    Immatricule.find({ email: { $ne: req.decoded.email } }, (err, result) => {
    if (err) return res.json(err);
    return res.json({ data: result });
  });
});
router.get('/list-imma',(req,res, next)=>{ 
  Immatricule.find({},(error,data)=>{
      if(error) {
          return next(error)
      } else { 
          res.json(data)
      }
      
  })
});
// modifier immatriculation
/*router.route('/update/:immatriculation').patch((req, res, next) => {
    Immatricule.findOneAndUpdate({immatriculation:req.params.immatriculation}, {
      $set: {immatriculation: req.body.immatriculation},}).exec().then(result=>{
        res.status(200).json({ message: "Update successful!" ,
    });
      })
    });*/

    router.route("/update/:immatriculation").patch(middleware.checkToken, async (req, res) => {
      let immatricule = {};
      await Immatricule.findOne({immatriculation: req.decoded.immatriculation}, (err, result) => {
        if (result != null) {
          immatricule = result;
        }
      });
     Immatricule.findOneAndUpdate({immatriculation:req.params.immatriculation},
        {
          $set: {
           immatriculation: req.body.immatriculation ? req.body.immatriculation : immatricule.immatriculation,
            
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
    

    
//supprimer immatriculation
router.route("/delete/:id").delete(middleware.checkToken, (req, res) => {
  Immatricule.findOneAndDelete(
    {
      $and: [{ email: req.decoded.email }, { _id: req.params.id }],
    },
    (err, result) => {
      if (err) return res.json(err);
      else if (result) {
        console.log(result);
        return res.json("Blog deleted");
      }
      return res.json("Blog not deleted");
    }
  );
});
module.exports = router;