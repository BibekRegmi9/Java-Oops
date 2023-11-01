const { db } = require("../database/db-setup");

// List the total sale of each petroleum.
const totalSale = (req, res) => {
  db.all(
    "SELECT petroleum_product, SUM(sale) AS total_sale FROM petroleumReport GROUP BY petroleum_product ORDER BY total_sale DESC ; ",
    function (err, rows) {
      if (err) {
        throw err;
      }
      console.log("--> TOTAL SALES");
      res.json({ rows });
      console.log(rows);
    }
  );
};

// List the top 3 countries that have the highest  total sales till date.
const highestSales = (req, res) => {
  db.all(
    "SELECT country, SUM(sale) AS total_sale FROM petroleumReport GROUP BY country ORDER BY total_sale DESC LIMIT 3 ; ",
    function (err, rows) {
      if (err) {
        throw err;
      }
      console.log("--> TOP 3 COUNTRIES THAT HAVE THE HIGHEST  TOTAL SALES");
      res.json({ rows });
      console.log(rows);
    }
  );
};



// List the top 3 countries that have the lowest total sales till date.
const lowestSales = (req, res) => {
  db.all(
    "SELECT country, SUM(sale) AS total_sale FROM petroleumReport GROUP BY country ORDER BY total_sale ASC LIMIT 3 ; ",
    function (err, rows) {
      if (err) {
        throw err;
      }
      console.log("--> TOP 3 COUNTRIES THAT HAVE THE LOWEST TOTAL SALES");
      res.json({ rows });
      console.log(rows);
    }
  );
};



//  List average sale of each petroleum product for 4 years of interval.
const averageSale = (req, res) => {
  db.all(
    "SELECT avg(sale) as avg,  year,petroleum_product FROM petroleumReport  where  sale>0 and year between '2007' and '2014' GROUP BY petroleum_product, year; ",
    function (err, rows) {
      if (err) {
        throw err;
      }

      res.json({ rows });
      console.log(rows);
    }
  );
};

module.exports = { totalSale, highestSales, lowestSales, averageSale };
