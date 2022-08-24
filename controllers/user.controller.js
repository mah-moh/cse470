const User = require('../models/User.model');

module.exports = {
    createUser: (req, res) => {
        var userDetails = new User({
            firstname : req.body.first_name,
            lastname : req.body.last_name,
            email : req.body.email,
            password : req.body.hashed_password,
            url : req.body.url
        });
        userDetails.save((err, doc) => {
            if (!err) {
                res.status(200).json(doc);
            }else {
                res.status(500).json({message: "An user exist with that email!"})
            }
        })
    },
    
    varifyUser: (req, res) => {
        User.findOne({ email: req.body.email }, (err, data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(500).json({message: "User not found!!!"})
            }
        })
    },

    getUser: (req, res) => {
        User.findById(req.body.userId, (err, data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(500).json({message: "User not found!!!"})
            }
        })
    },

    updateUrl: (req, res) => {
        User.findByIdAndUpdate(req.params.id, {url: req.body.url}, {new: true}, (err, data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(500).json({message: "User not found!!!"})
            }
        })
    }
}