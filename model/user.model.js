const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const User = Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  
  },
 
    token:{
      type:String,},
  
 /* tel: {
    type: String,
    required: true,
  },*/
});

User.methods.generateAuthToken = function(){
  try{
   let token = jwt.sign({email:this.email}, process.env.SECRET);
   this.token = token,
   this.save();
   return token

  }catch(err){
    console.log(err);
  }

}


module.exports = mongoose.model("client", User);