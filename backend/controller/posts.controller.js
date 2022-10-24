const db = require("../models");
const Bird = db.angrybird;
const Op = db.Sequelize.Op;

// Create and Save a new post
exports.create = (req, res) => {
    // Validate request
    
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

// Retrieve all Posts from the database by one id movie
exports.findAll = (req, res) => {
    const movie_id = req.params.id
    Bird.findAll({
        where: {
            movie_id
        }
    }).then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error ocurred while retrieving a post."
        });
    });
};

// Retrieve all Posts from the database by one user email
exports.findByEmail = (req, res) => {
    const userEmail = req.params.userEmail
    Bird.findAll({
        where: {
            userEmail
        }
    }).then(data =>{
        res.send(data);
    })
    .catch(err => {
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