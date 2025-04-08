const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  barcode: String,
  category: String,
  sustainabilityScore: Number,
  certifications: [String],
  impact: {
    carbonSaved: Number,
    waterSaved: Number
  },

  
  imageUrl: String,
  sellerLinks: [
    {
      platform: String,
      url: String,
      verified: Boolean
    }
  ],

  //Implemented relationship between entitites
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  
});

module.exports = mongoose.model('Product', productSchema);
