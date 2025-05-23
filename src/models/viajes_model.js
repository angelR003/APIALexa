// src/models/viaje_model.js

class Viaje {
    constructor({ id, nombre_conductor, destino, hora, pasajero, estatus = 'activo', tipo = 'viaje' }) {
        this.id = id; // identificador único
        this.nombre_conductor = nombre_conductor;
        this.destino = destino;
        this.hora = hora;
        this.pasajero = pasajero;
        this.estatus = estatus; // activo, cancelado, pendiente
        this.tipo = tipo; // viaje o aviso
    }
}

module.exports = Viaje;
