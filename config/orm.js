// Import (require) connection.js into orm.js
var connection = require("./connection")

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, data) {
            if (err) throw err
            console.log(data)
            callback(data)
        })
    },
    insertOne: function (table, col1, val1, callback) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col1, val1],function(err, result){
            if (err) throw err
            console.log(result)
            callback(result)
        })
    },
    updateOne: function(table, changedcol, changedval, targetcol, targetval, callback){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, changedcol, changedval, targetcol, targetval], function(err, result){
            if (err) throw err
            console.log(result)
            callback(result)
        })
    }

}    





// Export the ORM object in module.exports.
module.exports = orm;