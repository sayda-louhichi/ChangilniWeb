const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Schema Definition
//TODO: Assignment: Add Validate rule for email to be unique

const UserSchema = mongoose.Schema({
  name:{ type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  Cin: { type: String, required: true },
  tel: { type: String, required: true },
  adress: { type: String},
  //parc:{type: String, required: true}
});

//Pre Save Hook. Used to hash the password
UserSchema.pre('save', function(next){
  var chef =this;
  if(!chef.isModified('password')) return next();
  bcrypt.genSalt(10,function(err,salt){
  if(err)return next (erro);
bcrypt.hash(chef.password,salt,function(err,hash){
  if(err)return next(erro);
  chef.password = hash;
  chef.verify = hash
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

const Chef = mongoose.model('Chef', UserSchema);

module.exports = Chef;