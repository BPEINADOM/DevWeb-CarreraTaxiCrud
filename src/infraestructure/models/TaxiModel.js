const mongoose = require('mongoose');

const TaxiSchema = new mongoose.Schema({
    placa: { type: String, required: true, unique: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true }
});

module.exports = mongoose.model('Taxi', TaxiSchema);
