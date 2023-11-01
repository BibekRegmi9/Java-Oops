const db = require('./db-setup')

const createTable = (db) => {
    try {
        db.run(
            'CREATE TABLE IF NOT EXISTS petroleumReport (   "_id"   INTEGER,    "year"  TEXT NOT NULL, "petroleum_product"  TEXT, "sale"    TEXT NOT NULL, "Country"    TEXT NOT NULL, PRIMARY KEY("_id" AUTOINCREMENT));',
            function (err) {
                if (err) {
                    return console.log(err.message);
                }
                console.log(`table has been inserted`);
            }
        );
    } catch (error) {
        log("Not able to insert into the table")
    }


    
};

module.exports = createTable;