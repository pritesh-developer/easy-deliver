const booking = require('../models/booking.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
	
	if(!req.body.pickup){
		return res.status(400).send('Booking details can not be empty');
	}
	
    const booking = new Booking({
		
		'pickup':req.body.pickup,
		'drop':req.body.drop,
		'packageContent':req.body.packageContent,
		'userID':req.body.userID,
		'addressID':req.body.addressID,
		'packagePhoto':req.body.packagePhoto,
		'documents':req.body.documents,
		'price':req.body.price
	
	});
	
	booking.save().then(data => res.send(data)).catch(error => res.status(500).send({
            message: err.message || "Some error occurred while creating the Booking."
        }));
};


// Retrieve and return all bookings from the database.
exports.findAll = (req, res) => {
	
	Booking.find()
    .then(bookings => {
        res.send(bookings);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });

};

// Find a single booking with a noteId
exports.findOne = (req, res) => {
 Booking.findById(req.params.bookingId)
    .then(booking => {
        if(!booking) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });            
        }
        res.send(booking);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });
};

// When delivery boy accept 
exports.update = (req, res) => {
	
	 if(!req.body.bookingId) {
        return res.status(400).send({
            message: "booking id can not be empty"
        });
    }

    // Find booking and update it with the request body
    booking.findByIdAndUpdate(req.params.bookingId, {
        'status':req.body.status,
		'delivery_boy_assigned':req.body.delivery_boy_assigned,
    }, {new: true})
    .then(booking => {
        if(!booking) {
            return res.status(404).send({
                message: "booking not found with id " + req.params.bookingId
            });
        }
        res.send(booking);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "booking not found with id " + req.params.bookingId
            });                
        }
        return res.status(500).send({
            message: "Error updating  booking with id " + req.params.bookingId
        });
    });


};
