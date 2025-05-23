// src/app.js

const express = require('express');
const app = express();
const viajesRoutes = require('./routes/viajes_routes');

app.use(express.json());
app.use('/viajes', viajesRoutes);

module.exports = app;
