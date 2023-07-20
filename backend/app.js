const express = require('express');
const db = require('./db');
const User = require('./user'); // Importamos el modelo de usuario

const app = express();
app.use(express.json());

// Definimos una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola! La base de datos está conectada.');
});

// Ruta para obtener los detalles de una persona por su ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Busca en la base de datos el usuario con el ID proporcionado
  User.findById(userId, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al obtener los detalles del usuario.');
    }
    if (!user) {
      return res.status(404).send('Usuario no encontrado.');
    }
    // Usuario encontrado, enviar los detalles como respuesta
    res.json(user);
  });
});

// Ruta para crear varios usuarios
app.post('/users', async (req, res) => {
  try {
    const usersData = [
      // Datos de los usuarios aquí
    ];

    // Creamos los usuarios y los guardamos en la base de datos uno por uno
    const createdUsers = [];
    for (const userData of usersData) {
      const newUser = new User(userData);
      const savedUser = await newUser.save();
      createdUsers.push(savedUser);
    }

    // Usuarios creados exitosamente
    res.status(201).json(createdUsers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al crear los usuarios en la base de datos.');
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

