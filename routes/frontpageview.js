
const express = require('express');
const path = require('path');

const router = express.Router();

// const rootDir = require('../util/path');
// const bookingData = require('./booking');

const bookingController = require('../controllers/booking')

// router.get('/e/:bookingId',bookingController.getAddBooking);

router.get('/',bookingController.postDeleteBooking);



router.get('/',bookingController.getBookings);

module.exports = router;