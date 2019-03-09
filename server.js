// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 3000;
var app = express();

// Requiring our models for syncing
const db = require("./models");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));


// Set up Handlebars.
// =============================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// ==========Routes=============
// Import routes and give the server access to them.
require("./routes/apiRoutes")(app);



// Starts the server to begin listening when the database and table is created and sync
// =============================================================
db.sequelize.sync({ force: true }).then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
})