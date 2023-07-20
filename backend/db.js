// db.js
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/manosamigas';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión a la base de datos establecida');
});

module.exports = db;
