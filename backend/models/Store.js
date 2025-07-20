const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },

    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] 

});


module.exports = mongoose.model("Store", StoreSchema);

