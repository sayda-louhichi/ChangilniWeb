const mongoose = require('mongoose');

const ParcSchema = mongoose.Schema({
  name: { type: String, required: true },
  adress: { type: String, required: true},
  gouvernorat:{ type: String, required: true}
});
const Parc=mongoose.model('Parc',ParcSchema);
module.exports = Parc;