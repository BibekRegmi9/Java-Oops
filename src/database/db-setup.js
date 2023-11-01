const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database');
});
 
const closeDatabaseConnection = (db) => {
    // to stop the database connection
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Database connection stopped');
    });
};




module.exports = { db, closeDatabaseConnection };