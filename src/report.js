const express = require('express');
const { totalSale, highestSales, lowestSales, averageSale } = require('./controllers/petroleum-controller');

const {PORT} = require('./config/serverConfig');


const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());

    // ROUTES
    app.get('/totalsale', totalSale)
    app.get('/highestsales', highestSales)
    app.get('/lowestsale', lowestSales)
    app.get('/averagesale', averageSale )


    app.use('*', (req, res, next) => {
        res.status(404).json({
            success: false,
            message: 'Invalid request',
            err: error
        });
    });

    app.listen(PORT, () => {
        console.log(`Server Started on Port: ${PORT}`);

         
    });
}

setupAndStartServer();