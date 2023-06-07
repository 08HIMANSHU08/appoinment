
const express = require('express');
const path = require('path');
const router = express.Router();

// const rootDir = require('../util/path');

const bookingController = require('../controllers/booking')


router.get('/add-user',bookingController.getAddBooking);

router.post('/add-user',bookingController.postAddBooking);

// router.get('/e/:bookingId',bookingController.getEditBooking);

module.exports = router;