module.exports = (app) => {
    const address = require('../controllers/address.controller.js');

    // Create a new address
    app.post('/address', address.create);

    // Retrieve all addresses
    app.get('/addresses', address.findAll);

    // Retrieve a single address with addressId
    app.get('/addresses/:bookingId', address.findOne);

    // Update a address with addressId
    app.put('/addresses/:addressId', address.update);

    // Delete a address with addressId
    app.delete('/addresses/:addressId', address.delete);
}