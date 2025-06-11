const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    barcode: { type: String },
    sustainabilityScore: { type: Number, required: true },
    certifications: [String],
    store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' }, // Relationship added
    likedByUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Many-to-many
});


module.exports = mongoose.model("Product", ProductSchema);

