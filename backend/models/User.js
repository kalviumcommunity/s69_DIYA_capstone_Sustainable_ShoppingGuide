const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  badges: [String],
  ecoPoints: Number,
  preferences: {
    vegan: Boolean,
    plasticFree: Boolean,
    zeroWaste: Boolean
  }
});

module.exports = mongoose.model('User', userSchema);
