const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    barcode: { type: String },
    sustainabilityScore: { type: Number, required: true },
    certifications: [String],
});


module.exports = mongoose.model("Product", ProductSchema);

