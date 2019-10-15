const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    pickup: String,
    drop: String,
	packageContent: String,
    userID: Number,
	addressID:Number,
	packagePhoto:{ data: Buffer, contentType: String },
	documents:{ data: Buffer, contentType: String },
	price:Number,
	status: String,
	delivery_boy_assigned: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Booking', BookingSchema);