const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Releve = Schema({
  name:String,
  immatriculation: String,
  adress: String,
  email:String,
  parc: {
    type: String,
    //required: true,
  },
  coverImage: {
    type: String,
    default: "",
  },
  heureDebut:String,
  heureFin:String,
  total:String,
  date:String,
  
});

module.exports = mongoose.model("Relvés", Releve);