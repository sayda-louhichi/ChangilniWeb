
const express = require('express');
const router = express.Router();
const Employeur = require('/ChangilniAdmin/model/employeur')
var _ = require('lodash');


//Login
router.post('/auth', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = { email }
  //valider l'utilistaue existe
  Employeur.findOne(query, (err, employeur) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error, please try again'
      });
    }
    //si l'utilisateur n'existe pas 
    if (!employeur) {
      return res.send({
        success: false,
        message: 'Error, Account not found'
      });
    }
    //vérifier le password est correcte ou nn
    employeur.isPasswordMatch(password, employeur.password, (err, isMatch) => {
      //password invalide
      if (!isMatch) {
        return res.send({
          success: false,
          message: 'Error, Invalid Password'
        });
      }
     
      //utilisateur valide 

      let returnUser = {
        name: employeur.name,
        email: employeur.email,
        id: employeur._id,
        
      }

      //envoyer la réponse
      return res.send({
        success: true,
        message: 'You can login now',
        employeur: returnUser
      });
    });

  });

});

//Registeration
router.post('/register', (req, res, next) => {
  let newUser = new Employeur({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    Cin: req.body.Cin,
    tel: req.body.tel,
    adress: req.body.adress,
    parc: req.body.parc
  });

  newUser.save((err, employeur) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Failed to save the user'
      });
    }
    res.send({
      success: true,
      message: 'employeur Saved',
      employeur
    });
  });
});

router.put('/edit-profile/:id', function (req, res, next) {
  // fetch user
  Employeur.findById(req.params.id, function(err, post) {
      if (err) return next(err);

      _.assign(post, req.body); // update user
      post.save(function(err) {
          if (err) return next(err);
          return res.json(200, post);
      })
  });
});  
module.exports = router;