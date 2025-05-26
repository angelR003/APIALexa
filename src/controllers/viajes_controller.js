// src/controllers/viajes_controller.js

const Viaje = require('../models/viajes_model');
const { v4: uuidv4 } = require('uuid');

// GET todos los viajes activos
exports.getAllViajes = async (req, res) => {
    try {
        const activos = await Viaje.find({ estatus: 'activo' });
        res.json(activos);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los viajes' });
    }
};

// GET viajes por ciudad/destino
exports.getViajesPorCiudad = async (req, res) => {
    const { destino } = req.params;
    try {
        const filtrados = await Viaje.find({
            destino: { $regex: new RegExp(destino, 'i') },
            estatus: 'activo'
        });
        res.json(filtrados);
    } catch (err) {
        res.status(500).json({ message: 'Error al buscar viajes por destino' });
    }
};

// POST crear viaje
exports.createViaje = async (req, res) => {
    const { nombre_conductor, destino, hora, pasajero } = req.body;
    try {
        const viaje = new Viaje({
            id: uuidv4(),
            nombre_conductor,
            destino,
            hora,
            pasajero
        });
        await viaje.save();
        res.status(201).json(viaje);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear el viaje' });
    }
};

// PUT actualizar viaje
exports.updateViaje = async (req, res) => {
    const { id } = req.params;
    const { destino, hora, pasajero, estatus, tipo } = req.body;
    try {
        const viaje = await Viaje.findOne({ id });
        if (!viaje) return res.status(404).json({ message: 'Viaje no encontrado' });

        if (destino) viaje.destino = destino;
        if (hora) viaje.hora = hora;
        if (pasajero) viaje.pasajero = pasajero;
        if (estatus) viaje.estatus = estatus;
        if (tipo) viaje.tipo = tipo;

        await viaje.save();
        res.json(viaje);
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar el viaje' });
    }
};

// DELETE cancelar viaje
exports.deleteViaje = async (req, res) => {
    const { id } = req.params;
    try {
        const viaje = await Viaje.findOne({ id });
        if (!viaje) return res.status(404).json({ message: 'Viaje no encontrado' });

        viaje.estatus = 'cancelado';
        await viaje.save();
        res.json({ message: 'Viaje cancelado', viaje });
    } catch (err) {
        res.status(500).json({ message: 'Error al cancelar el viaje' });
    }
};
