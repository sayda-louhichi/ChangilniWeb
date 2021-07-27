const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Releve = Schema({
  name:String,
  immatriculation: String,
  adress: String,
  email:String,
  parc: {
    type: String,
    required: true,
    unique: true,
  },
  coverImage: {
    type: String,
    default: "",
  },
  
});

module.exports = mongoose.model("Relvés", Releve);