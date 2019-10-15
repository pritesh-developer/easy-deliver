const user = require('../models/user.model.js');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

// Create and Save a new Note
exports.create = (req, res, next) => {
	
	if(!req.body.name){
		return res.status(400).send('User details can not be empty');
	}
	
	 user.create({'name':req.body.name,'phone':req.body.phone,'email':req.body.email,'password':req.body.password,'location':req.body.location,'gender':req.body.gender,'dob':req.body.dob , 'type':req.body.type,'idProof':req.body.idProof,'photo':req.body.photo,'documents':req.body.documents}, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "User added successfully!!!", data: null});
      
    });
};

exports.authenticate = (req, res, next) => {
	user.findOne({email:req.body.email}, function(err, userInfo){
     if (err) {
		next(err);
     } else {
		if(bcrypt.compareSync(req.body.password, userInfo.password)) {
		const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
		res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
		}else{
		res.json({status:"error", message: "Invalid email/password!!!", data:null});
		}
     }
    });
 };
