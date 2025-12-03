const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    clave: { type: String, required: true },
    rol: { 
        type: String, 
        enum: ["ADMIN", "USER", "TAXISTA"],
        required: true 
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
