const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Immatricule = Schema({
    email: {
        type: String,
        required: true,
        unique: true,
      },
    immatriculation: {
      type: String,
      required: true,
     unique:true,
    },
});
module.exports = mongoose.model("immatricule", Immatricule);