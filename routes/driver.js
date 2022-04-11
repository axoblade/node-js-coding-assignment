const express = require('express');
const advancedFilter = require('../middleware/filter');
const { protect, authorize } = require('../middleware/auth');
//include the controller
const {
    createDriver,
    getDriver,
    suspendDriver,
    suspendDriverReverse
} = require('../controllers/driver');
const Driver = require('../models/Driver');

const router = express.Router();

router.route('/')
    .post(protect, authorize('admin'), createDriver)
    .get(protect, authorize('admin'), advancedFilter(Driver), getDriver);

router.route('/:driverId/suspend')
    .post(protect, authorize('admin'), suspendDriver)
    .delete(protect, authorize('admin'),suspendDriverReverse);

module.exports = router;