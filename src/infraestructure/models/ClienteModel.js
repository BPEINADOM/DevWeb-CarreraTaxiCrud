const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    idCliente: { type: String, required: true, unique: true },
    nombre: { type: String, required: true }
});

module.exports = mongoose.model('Cliente', ClienteSchema);
