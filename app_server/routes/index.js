var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');



/* Locations pages */

router.get('/', ctrlLocations.homelist);
router.get('/:locationid', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);
router.get('/information', ctrlOthers.information);


module.exports = router;
