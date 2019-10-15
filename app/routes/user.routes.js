module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/users', users.create);
	
	//authentication token
	app.post('/authenticate', users.authenticate);

}