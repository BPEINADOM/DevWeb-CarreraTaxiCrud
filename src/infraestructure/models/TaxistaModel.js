const mongoose = require('mongoose');

const TaxistaSchema = new mongoose.Schema({
    idTaxista: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    licencia: { type: String, required: true }
});

module.exports = mongoose.model('Taxista', TaxistaSchema);
