const express = require('express');
const router = express.Router();
const viajesController = require('../controllers/viajes_controller');

// Ruta general (todos)
router.get('/', viajesController.getAllViajes);

// Ruta filtrada por ciudad (¡ponla antes de rutas con :id!)
router.get('/ciudad/:destino', viajesController.getViajesPorCiudad);

// CRUD
router.post('/', viajesController.createViaje);
router.put('/:id', viajesController.updateViaje);
router.delete('/:id', viajesController.deleteViaje);

module.exports = router;
