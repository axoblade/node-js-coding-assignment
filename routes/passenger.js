const express = require('express');
const advancedFilter = require('../middleware/filter');
const { protect, authorize } = require('../middleware/auth');
//include the controller
const {
    createPassenger,
    getPassengers
} = require('../controllers/passenger');
const Passenger = require('../models/Passenger');

const router = express.Router();

router.route('/')
    .post(protect, authorize('admin'), createPassenger)
    .get(protect, authorize('admin'), advancedFilter(Passenger), getPassengers);

module.exports = router;