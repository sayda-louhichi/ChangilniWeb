const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Facture = Schema({
  name:String,
  immatriculation: {
    type: String,
    required: true,
  },
  heureDebut: {
    type: String,
    required: true,
  },
  heureFin: {
    type: String,
    required: true,
  },
  total:{type:Number},
  date:String,
 
 owner:String,
});

module.exports = mongoose.model("Factures", Facture);