const path = require('path');
const locationController = require('../controllers/locationController');

const express = require('express');


const router = express.Router();


router.post('/addlocations/:location',locationController.addLocation );

module.exports = router;