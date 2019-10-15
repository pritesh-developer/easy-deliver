const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    location: String,
    flatNo: String,
	apartmentName: String,
    landmark: String,
	instruction: String,
	type: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Address', AddressSchema);