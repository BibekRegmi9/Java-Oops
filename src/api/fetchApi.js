const axios = require('axios');
const {db, closeDatabaseConnection} = require('../database/db-setup');
const createTable = require ('../database/query');





//function to call api request
const fetchApi = (db) => {
    
    axios.get(
            'https://raw.githubusercontent.com/younginnovations/internship-challenges/master/programming/petroleum-report/data.json'
        )
        .then(function (response) {
            response.data.map((val) => {
                db.run(
                    'INSERT INTO petroleumReport (year, petroleum_product, sale, country) VALUES(?,?,?,?)',
                    [val.year, val.petroleum_product, val.sale, val.country],
                    
                    function (err) {
                        if (err) {
                            return console.log(err.message);
                        }
                        console.log(`row is inserted`);
                    }
                );

                console.log(val.year,val.petroleum_product)
              
            });
        })

        .catch(function (error) {
            console.log(error);
        })

        .then(function () {
            closeDatabaseConnection(db);
        });
};
 




createTable(db);
fetchApi(db);
