module.exports = (app) => {
    const prices = require('../controllers/price.controller.js');

    // Create a new price
    app.post('/price', prices.create);

    // Retrieve all prices
    app.get('/prices', prices.findAll);

    // Retrieve a single price with priceId
    app.get('/prices/:priceId', prices.findOne);

    // Update a price with priceId
    app.put('/prices/:priceId', prices.update);

    // Delete a price with priceId
    app.delete('/prices/:priceId', prices.delete);
}