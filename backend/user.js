// user.js
const mongoose = require('mongoose');

// Definimos el esquema del modelo de usuario
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true, unique: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
