const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Schema Definition
//TODO: Assignment: Add Validate rule for email to be unique

const UserSchema = mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  Cin: { type: String, required: true },
  tel: { type: String, required: true },
  adress: { type: String, required: true },
  parc:{type:String, required: true}
  
});

//Pre Save Hook. Used to hash the password
UserSchema.pre('save', function(next){
  var employeur =this;
  if(!employeur.isModified('password')) return next();
  bcrypt.genSalt(10,function(err,salt){
  if(err)return next (erro);
bcrypt.hash(employeur.password,salt,function(err,hash){
  if(err)return next(erro);
  
  employeur.password = hash;
  employeur.verify = hash
  next();
});
});
});
//Custom method to check the password correct when login
UserSchema.methods.isPasswordMatch = function(plainPassword, hashed, callback) {
  bcrypt.compare(plainPassword, hashed, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};
const Employeur = mongoose.model('Employeur',UserSchema);
module.exports = Employeur;