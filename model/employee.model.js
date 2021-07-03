const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Employee = Schema({
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
  cin: {
    type: String,
    required: true,
  },
  tel:{type:String},

});

module.exports = mongoose.model("Employé", Employee);