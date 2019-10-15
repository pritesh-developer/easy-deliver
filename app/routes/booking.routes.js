module.exports = (app) => {
    const bookings = require('../controllers/booking.controller.js');

    // Create a new booking
    app.post('/booking', booking.create);

    // Retrieve all bookings
    app.get('/bookings', bookings.findAll);

    // Retrieve a single booking with bookingId
    app.get('/bookings/:bookingId', bookings.findOne);

    // Update a booking with bookingId
    app.put('/bookings/:bookingId', bookings.update);

    // Delete a booking with bookingId
    app.delete('/bookings/:bookingId', bookings.delete);
}