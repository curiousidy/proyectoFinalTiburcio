const express = require ( "express" ) ;
const cors = require ( "cors" ) ; 

const app = express ( ) ;


// parse requests of content - type application / json
app.use ( express.json ( ) ) ;

// parse requests of content - type - application / x - www - form - urlencoded
app.use ( express.urlencoded ( { extended : true } ) ) ;
app.use(cors()); 

const db = require("./models"); 

db.Sequelize.sync({ force: true}).then(() => { 
    console.log("Drop and re-sync db.");
})

// simple route
app.get ( "/" , ( req , res ) => {
  res.json ( { message : "Welcome to FilmFlix application ." } ) ;
} ) ;

require("./routes/post.routes.js")(app);

// set port , listen for requests
const PORT = process.env.PORT || 8080 ;
app.listen ( PORT , ( ) => {
  console.log (`Server is running on port ${ PORT } .` ) ;
} ) ;
