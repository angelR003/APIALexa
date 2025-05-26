const express = require('express');
const app = express();
const viajesRoutes = require('./routes/viajes_routes');
const connectDB = require('./dabase');

// Middleware para JSON
app.use(express.json());
connectDB();

// Redirige la ruta raíz ("/") a "/viajes"
app.get('/', (req, res) => {
  res.redirect('/viajes');  // HTTP 302 (redirección temporal)
});

// Rutas de viajes
app.use('/viajes', viajesRoutes);

module.exports = app;