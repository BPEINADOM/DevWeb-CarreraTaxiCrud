const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const TaxistaSchema = new mongoose.Schema({
    idTaxista: { type: String, required: true, unique: true, default: uuidv4 },
    nombre: { type: String, required: true },
    licencia: { type: String, required: true }
});

module.exports = mongoose.model('Taxista', TaxistaSchema);
