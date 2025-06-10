const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    category: String,
    barcode: String,
    sustainabilityScore: Number,
    certifications: [String],
});

module.exports = mongoose.model("Product", ProductSchema);