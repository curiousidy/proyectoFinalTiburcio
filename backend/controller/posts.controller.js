const db = require("../models");
const Bird = db.angrybird;
const Op = db.Sequelize.Op;

// Create and Save a new post
exports.create = (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body.post && !req.body.userEmail) {
        res.status(400).send({
            message : "I need a posts"
        });
    return;
    }

    // Create a post
    const post = {
        ...req.body,
    };

    // Save post in the database
    Bird.create(post).then(data => {
            res.send(data) ;
        })
        .catch(err => {
            res.status(500).send({
                message:  err.message || " Some error occurred while creating the post."
            });
        });
};

// Retrieve all Posts from the database
exports.findAll = (req, res) => {
    Bird.findAll().then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving a post."
        });
    });
};

// Find a single Post with an id
exports.findOne = (req, res) => {
    id = {...req.params};
    Bird.findOne(id).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving a post."
        });
    });
};

// Update a Post by the id
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const data  = await Bird.update({...req.body}, {
            where: {
                id
            }
        })

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving a post."
        });    
    }
    
};

// Delete a Post with the specific id :
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const data  = await Bird.destroy({
            where: {
              id
            }
          });
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving a post."
        });    
    }
};