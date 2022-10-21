const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) =>{
    const Post = sequelize.define("post", {
        movie_id: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        post: {
            type: Sequelize.STRING
        },
    });

    return Post;
}