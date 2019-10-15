const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
//const users = require('./routes/user');
const dbConfig = require('./config/config.js');
const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const app = express();

//for parsing Conetnt Type json
 app.use(bodyParser.json());
 
 app.set('secretKey', 'easyRide');
 
 
 
 mongoose.Promise = global.Promise;

	// Connecting to the database
	mongoose.connect(dbConfig.url, {
		useNewUrlParser: true
	}).then(() => {
		console.log("Successfully connected to the database");    
	}).catch(err => {
		console.log('Could not connect to the database. Exiting now...', err);
		process.exit();
	});

 app.use(logger('dev'));
 app.get('/', (req,res) => {
	 res.json({'message':'A message'});
 });
 
 require('./app/routes/user.routes.js')(app);
 
 function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
  
}
 
 // public route
 //app.use('/users', users);
 
 app.listen(3000, ()=>{console.log("Server is listening on part 3000")});
 