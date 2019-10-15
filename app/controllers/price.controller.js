const booking = require('../models/price.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
	
	if(!req.body.distance){
		return res.status(400).send('Booking details can not be empty');
	}
	
    const price = new Booking({
		
		'distance':req.body.distance,
		'contentType':req.body.contentType,
		'price':req.body.price
	
	});
	
	price.save().then(data => res.send(data)).catch(error => res.status(500).send({
            message: err.message || "Some error occurred while creating the price settings."
        }));
};


// Retrieve and return all bookings from the database.
exports.findAll = (req, res) => {
	
	price.find()
    .then(prices => {
        res.send(prices);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });

};

// Find a single booking with a noteId
exports.findOne = (req, res) => {
 Booking.find({distance: req.body.distance, price: req.body.price})
    .then(prices => {
        if(!prices) {
            return res.status(404).send({
                message: "Price not found with "
            });            
        }
        res.send(prices);
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving "
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
     if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};
