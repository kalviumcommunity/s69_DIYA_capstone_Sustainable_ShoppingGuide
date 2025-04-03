const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
    name: String,
    location: String,
    category: String
});

module.exports = mongoose.model("Store", StoreSchema);
