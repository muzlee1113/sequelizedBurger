
// import Express
var express = require("express")
// router
var router = express.Router();

// burger.js
var datahandler = require("../models/burger")
// Create the router for the app, and export the router at the end of your file.

router.get("/", function(req, res) {
    datahandler.selectAll(function(data) {
      // formating the data in an object
        var burgers = {
        burgersData: data
      };
      console.log(burgers);
      //render in dom
      res.render("index", burgers);
    });
  });
  
  router.post("/api/burger", function(req, res) {
    console.log(req.body)
    datahandler.insertOne(req.body.burger_name, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var id = req.params.id;
    console.log("id is ", id);
    datahandler.updateOne(id, function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  

 