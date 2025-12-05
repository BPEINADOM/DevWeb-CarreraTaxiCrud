const mongoose = require('mongoose');

const CarreraTaxiSchema = new mongoose.Schema({
    idCarrera: { type: String, required: true, unique: true },

    cliente: { type: Object, required: true },
    taxi: { type: Object, required: true },
    taxista: { type: Object, required: false },

    kilometros: { type: Number, default: null },
    barrioInicio: { type: String, default: null },
    barrioLlegada: { type: String, default: null },
    cantidadPasajeros: { type: Number, default: null },

    precio: { type: Number, default: null },
    duracionMinutos: { type: Number, default: null },

    estado: { type: String, required: true, default: 'SOLICITADA' },
    fechaSolicitud: { type: Date, default: Date.now },
    fechaInicio: { type: Date, default: null },
    fechaFin: { type: Date, default: null }
}, { timestamps: true });

module.exports = mongoose.model('CarreraTaxi', CarreraTaxiSchema);