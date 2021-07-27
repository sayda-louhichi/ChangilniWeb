
const express = require('express');
const router = express.Router();
const Chef = require('/changilniWeb/model/chefParc');
const Releve = require("../model/releve.model");
let middleware = require("../middleware");
const config = require("../config");
const jwt = require('jsonwebtoken');
var _ = require('lodash');
const Parc = require('/changilniWeb/model/parc');

//Login
router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const parc =req.body.parc;

  const query = { email ,parc}
  //valider l'utilistaue existe
  Chef.findOne(query, (err, chef) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error, please try again'
      });
    }
    //si l'utilisateur n'existe pas 
    if (!chef) {
      return res.send({
        success: false,
        message: 'Error, Account not found'
      });
    }
    //vérifier le password est correcte ou nn
    chef.isPasswordMatch(password, chef.password, (err, isMatch) => {
      //password invalide
      if (!isMatch) {
        return res.send({
          success: false,
          message: 'Error, Invalid Password'
        });
      }
      let token = jwt.sign({ email: req.body.email },config.key, {});
      //utilisateur valide 

      let returnUser = {
        name: chef.name,
        email: chef.email,
        parc:chef.parc,
        id: chef._id,
        token
      }

      //envoyer la réponse
      return res.send({
        success: true,
        message: 'You can login now',
        chef: returnUser,
        
      });
    });

  });

});

//Registeration
router.post('/register', (req, res, next) => {
  let newUser = new Chef({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    Cin: req.body.Cin,
    tel: req.body.tel,
    adress: req.body.adress
  });
  newUser.save((err, chef) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Failed to save the chef'
      });
    }
    res.send({
      success: true,
      message: 'chef Saved',
  chef,
    });
   
  });
});
//edit profile
router.put('/update-profile/:id', function (req, res, next) {
  // fetch user
  Chef.findById(req.params.id, function(err, post) {
      if (err) return next(err);

      _.assign(post, req.body); // update user
      post.save(function(err) {
          if (err) return next(err);
          return res.json(200, post);
      })
  });
});  

router.get('/list-parc',(req,res, next)=>{ 
  Parc.find({},(error,data)=>{
      if(error) {
          return next(error)
      } else {
          res.json(data)
      }
      
  })
});

router.post('/list',(req, res, next) => {
  const parc = req.body.parc;
  Releve.find({ parc }, (err, releves)=>{
    if (err) {
      return res.send({
        success: false,
        message: 'Error while reteriving the tasks'
      });
    }

    return res.send({
      success: true,
      releves
    });
  });
});




module.exports = router;