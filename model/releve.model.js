const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Releve = Schema({
  immatriculation: String,
  adress: String,
  email:String,
 
  coverImage: {
    type: String,
    default: "",
  },
  
});

module.exports = mongoose.model("Relvés", Releve);