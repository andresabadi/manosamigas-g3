// app.js
const express = require('express');
const db = require('./db');
const User = require('./user'); // Importamos el modelo de usuario

const app = express();
app.use(express.json());


// Definimos una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola! La base de datos está conectada.');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
