// Requiring models
var db = require("../models");

module.exports = function (app) {

    // GET: get all the Burgers and render the page with handlebars
    app.get("/", function (req, res) {
        db.SequelizeBurgers.findAll({
            order: [
                ['burger_name'],
            ],
            include: [{ model: db.SequelizeOwners }]
        }).then(function (data) {
            // formating the data in an object
            var burgers = {
                burgersData: data
            };
            console.log(burgers);
            //render in dom
            res.render("index", burgers);
        });
    });
    // GET: get all the owners
    app.get("/owners", function (req, res) {
        db.SequelizeOwners.findAll({
            include: [{ model: db.SequelizeBurgers }]
        }).then(function (data) {
            // send data in json format
            res.json(data)
        }).catch(function (err) {
            if (err) res.status(500).end()
        })
    });
    // POST: get the request body of new owner and send to database
    app.post("/api/owner", function (req, res) {
        console.log(req.body)
        db.SequelizeOwners.create(req.body).then(function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
    });

    // POST: get the request body of new burger and send to database
    app.post("/api/burger", function (req, res) {
        console.log(req.body)
        db.SequelizeBurgers.create(req.body).then(function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
    });

    // PUT: update the database and change the devoured status 
    app.put("/api/burger/:id", function (req, res) {
        console.log("id is ", req.params.id);
        db.SequelizeBurgers.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
            }).then(function (result) {
                if (result.changedRows === 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                }
                res.status(200).end();
            }
            );
    });
}