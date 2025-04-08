const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: String,
  category: String,
  address: String,
  coordinates: {
    lat: Number,
    lng: Number
  },
  website: String
});

module.exports = mongoose.model('Store', storeSchema);
