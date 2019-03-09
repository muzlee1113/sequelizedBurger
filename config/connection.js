// Inside the connection.js file, setup the code to connect Node to MySQL.
// Dependency for mysql
var mysql = require("mysql")

// set up connection to database
var connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "burgers_db"
    })
}

// connect to database
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

// Export the connection.
module.exports = connection;