module.exports = app => {
    const post = require ( "../controller/posts.controller.js" );

   var router = require ( "express" ).Router ();

   // Create a new post
    router.post( "/" , post.create );


   // Retrieve all posts
    router.get( "/" , post.findAll );

   // Retrieve a single post with id
    router.get( "/:id" , post.findOne );

   // Update a post with id
    router.put( "/:id" , post.update );

   // Delete a post with id
    router.delete( "/:id" , post.delete );

    app.use( '/api/posts' , router );

  };