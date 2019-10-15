const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const saltRounds = 10;

const User = mongoose.Schema({
    name: String,
    phone: String,
	email: String,
	password: String,
    location: String,
	gender: String,
    dob: String,
	type: String,
	idProof:{ data: Buffer, contentType: String },
	photo:{ data: Buffer, contentType: String },
	documents:{ data: Buffer, contentType: String },
	status:String
}, {
    timestamps: true
});

User.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});

module.exports = mongoose.model('User', User);