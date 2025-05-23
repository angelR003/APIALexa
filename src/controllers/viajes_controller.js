// src/controllers/viajes_controller.js

const Viaje = require('../models/viajes_model');
const viajes = require('../data/viajes_data');
const { v4: uuidv4 } = require('uuid');

// GET todos los viajes
exports.getAllViajes = (req, res) => {
    const activos = viajes.filter(v => v.estatus === 'activo');
    res.json(activos);
};

// Nuevo: obtener viajes solo por ciudad/destino
exports.getViajesPorCiudad = (req, res) => {
    const { destino } = req.params;
    const filtrados = viajes.filter(
        v => v.destino.toLowerCase() === destino.toLowerCase() && v.estatus === 'activo'
    );
    res.json(filtrados);
};

// POST crear viaje
exports.createViaje = (req, res) => {
    const { nombre_conductor, destino, hora, pasajero } = req.body;
    const viaje = new Viaje({
        id: uuidv4(),
        nombre_conductor,
        destino,
        hora,
        pasajero,
        estatus: "activo",
        tipo: "viaje"
    });
    viajes.push(viaje);
    res.status(201).json(viaje);
};

// PUT actualizar viaje
exports.updateViaje = (req, res) => {
    const { id } = req.params;
    const { destino, hora, pasajero, estatus, tipo } = req.body;
    const viaje = viajes.find(v => v.id === id);

    if (!viaje) {
        return res.status(404).json({ message: "Viaje no encontrado" });
    }

    if (destino) viaje.destino = destino;
    if (hora) viaje.hora = hora;
    if (pasajero) viaje.pasajero = pasajero;
    if (estatus) viaje.estatus = estatus;
    if (tipo) viaje.tipo = tipo;

    res.json(viaje);
};

// DELETE cancelar viaje
exports.deleteViaje = (req, res) => {
    const { id } = req.params;
    const index = viajes.findIndex(v => v.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Viaje no encontrado" });
    }

    viajes[index].estatus = "cancelado"; // solo se marca como cancelado
    res.json({ message: "Viaje cancelado", viaje: viajes[index] });
};
