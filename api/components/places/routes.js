const express = require('express')
const response = require('../../../utils/response');
const controlller = require('./controller');
const secure = require('../../../utils/middleware/secure'); 

function placesRoutes(app) {
    const router = express.Router();
    app.use('/api/places', router);

    router.get('/',secure('logged'), function(req, res, next) {
        const city = req.query.city || null;
        const type = req.query.type || null;

        controlller.searchPlaces(city, type)
            .then(places => {
                response.success(req, res, places, 200);
            })
            .catch(next);
    });
}

module.exports = placesRoutes;