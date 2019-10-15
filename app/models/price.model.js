const mongoose = require('mongoose');

const PriceSchema = mongoose.Schema({
    distance: Number,
    contentType: String,
	price: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Price', PriceSchema);