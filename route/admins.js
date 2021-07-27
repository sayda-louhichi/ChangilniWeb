const express = require('express');
const router =express.Router();
const Admin = require('/changilniWeb/model/admin');
const Chef = require('/changilniWeb/model/chefParc');
const Employee = require('/changilniWeb/model/employee.model');
const Parc = require('/changilniWeb/model/parc');
const Releve = require('/changilniWeb/model/releve.model');
var _ = require('lodash');

//Login
router.post('/login',(req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;

    const query={email}
    //utilisateur existe 
    Admin.findOne(query,(err,admin)=>{
        if(err){
            return res.send({
                success: false,
                message:'Error, please try again'
            });
        }
        if(!admin){
            return res.send({
                success: false,
                message:'Eror, Account not found'
            });
        }
        admin.isPasswordMatch(password, admin.password,(err,isMatch)=>{
            if(!isMatch){
                return res.send({
                    success: false,
                    message:'Eror, Invalid password'
                });
            }
    
            let returnAdmin ={
                name:admin.name,
                email :admin.email,
                id:admin._id
            }
            return res.send({
                success: true,
                message:'you can login now',
                admin: returnAdmin
            });
        });
    });
    });
    
//Registration
router.get('/register',(req, res, next)=>{
let newAdmin = new Admin ({
    name: req.body.name,
    email:req.body.email,
    password:req.body.password
});
newAdmin.save((err, admin)=>{
    if(err){
        res.send({
success:false,
message: 'failed to save the user'
        });
    }
    res.send({
        success : true,
        message:'admin saved ',
        admin
    });
});
});
//ajout chef du parc
router.post('/ajout-chefParc', (req, res, next) => {
    let newUser = new Chef({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      Cin: req.body.Cin,
      tel: req.body.tel,
      adress: req.body.adress,
      parc:req.body.parc
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
  //Liste des chefs du parc
  router.get('/list-chefParc',(req,res, next)=>{ 
    Chef.find((error,data)=>{
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
        
    })
  });
  router.route('/getchef').post((req, res) => {
    Chef.find({_id:req.body._id}).exec().then(result=>{
        res.status(200).json({ result:result[0],message: "get chef" });
  
      })
  });

  //updat chef du parc
      router.put('/update-chefParc/:id', function (req, res, next) {
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
//supprimer un chef du parc
router.delete('/supp-chefParc/:id', (req, res, next)=>{
   
    const chefId = req.params.id;
    Chef.remove({ _id: chefId }, (err) => {
        if(err) {
          return res.send({
            success: false,
            message: 'Failed to delete the chef'
          });
        }
  
        return res.send({
          success: true,
          message: 'chef deleted'
        });
    });
  });

  //Liste des employeurs
  router.get('/list-employyeur',(req,res, next)=>{ 
    Employee.find((error,data)=>{
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
        
    })
  });

 // ajout un employeur
 router.post('/ajout-employeur', (req, res, next) => {
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
  //update employeur
  router.patch('/update-employeur/:id', function (req, res, next) {
    // fetch user
    Employee.findById(req.params.id, function(err, post) {
        if (err) return next(err);

        _.assign(post, req.body); 
        post.save(function(err) {
            if (err) return next(err);
            return res.json(200, post);
        })
    });
});  
router.route('/getemployee').post((req, res) => {
  Employee.find({_id:req.body._id}).exec().then(result=>{
      res.status(200).json({ result:result[0],message: "get employeur" });

    })
});
//supprimer un employeur
router.delete('/supp-employeur/:id', (req, res, next)=>{
   
    const employeurId= req.params.id;
    Employee.remove({ _id: employeurId }, (err) => {
        if(err) {
          return res.send({
            success: false,
            message: 'Failed to delete the chef'
          });
        }
  
        return res.send({
          success: true,
          message: 'employeur deleted'
        });
    });
  });
//liste des parcs
router.get('/list-parc',(req,res, next)=>{ 
    Parc.find({},(error,data)=>{
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
        
    })
  });
  //ajout parc
  router.post('/add-parc',(req, res, next) => {
    const parc = new Parc({
      name: req.body.name,
      adress:req.body.adress,
      gouvernorat:req.body.gouvernorat
    });
    parc.save((err, parc) => {
      if (err) {
        // throw err;
        return res.send({
          success: false,
          message: 'Error while saving, pelase try again'
        });
      }

      return res.send({
        success: true,
        parc,
        message: 'parc Saved'
      });

    });
});
//update parc
router.route('/update-parc/:id').put((req, res, next) => {
    console.log(req.body)
  
    Parc.findOneAndUpdate({_id:req.params.id}, {
      $set: {name: req.body.name,adress: req.body.adress,gouvernorat:req.body.gouvernorat},}).exec().then(result=>{
        res.status(200).json({ message: "Update successful!" });
  
      })
  })
  router.route('/getparc').post((req, res) => {
    Parc.find({_id:req.body._id}).exec().then(result=>{
        res.status(200).json({ result:result[0],message: "get parc" });
  
      })
  });
  //supprimer parc
  router.delete('/remove/:id',(req, res, next) => {
    const parcId = req.params.id;
    Parc.remove({ _id: parcId }, (err) => {
        if(err) {
          return res.send({
            success: false,
            message: 'Failed to delete the task'
          });
        }
        return res.send({
          success: true,
          message: 'parc deleted'
        });
    });
  });
  
  router.get('/list-releve',(req,res, next)=>{ 
    Releve.find({},(error,data)=>{
        if(error) {
            return next(error)
        } else {
            res.json(data)
        }
        
    })
  });
  router.route("/delete/:id").delete((req, res) => {
    Releve.findOneAndDelete(
      {
        $and: [{ _id: req.params.id }],
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
  
  module.exports =router;