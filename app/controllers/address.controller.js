const address = require('../models/address.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
	
	if(!req.body.location){
		return res.status(400).send('Address details can not be empty');
	}
	
    const address = new Address({
		'location':req.body.location,
		'flatNo':req.body.flatNo,
		'apartmentName':req.body.apartmentName,
		'landmark':req.body.landmark,
		'instruction':req.body.location,
		'type':req.body.flatNo
		});
	
	address.save().then(data => res.send(data)).catch(error => res.status(500).send({
            message: err.message || "Some error occurred while creating the Address."
        }));
};


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Address.find()
    .then(address => {
        res.send(address);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};


// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};