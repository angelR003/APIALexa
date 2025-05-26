// src/models/viajes_model.js

const mongoose = require('mongoose');

const viajeSchema = new mongoose.Schema({
    id: { type: String, required: true },
    nombre_conductor: { type: String, required: true },
    destino: { type: String, required: true },
    hora: { type: String, required: true },
    pasajero: { type: String, required: true },
    estatus: { type: String, default: 'activo' },
    tipo: { type: String, default: 'viaje' }
});

module.exports = mongoose.model('Viaje', viajeSchema);