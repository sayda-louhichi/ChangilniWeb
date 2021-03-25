const mongoose = require ('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = mongoose.Schema({
    name: String,
    email:{ type:String, required:true},
    password: { type: String, required:true }
})
UserSchema.pre('save', function(next){
    var admin =this;
    if(!admin.isModified('password')) return next();
    bcrypt.genSalt(10,function(err,salt){
    if(err)return next (erro);
bcrypt.hash(admin.password,salt,function(err,hash ){
    if(err)return next(erro);
    
    admin.password = hash;
    admin.verify = hash
    next();
});
});
});

UserSchema.methods.isPasswordMatch = function (plainPassword, hashed, callback){
    bcrypt.compare(plainPassword,hashed,(err, isMatch)=>{
        if(err){
            next(err);
        }
        callback(null,isMatch);
    });
}

const Admin = mongoose.model('Admin',UserSchema);
module.exports = Admin;