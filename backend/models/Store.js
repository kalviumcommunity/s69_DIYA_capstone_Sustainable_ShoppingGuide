const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String, // e.g., "Zero-Waste", "Organic Grocery", "Sustainable Fashion"
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
    address: String,
  },
  ecoCertifications: [String], // e.g., ["Fair Trade", "Certified Organic"]
  contact: {
    phone: String,
    email: String,
    website: String,
  },
  openHours: {
    type: String,
    default: "10 AM - 6 PM",
  },
  addedByUser: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Index to support geo queries
storeSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Store", storeSchema);
