const express = require('express');
const advancedFilter = require('../middleware/filter');
const { protect, authorize } = require('../middleware/auth');
//include the controller
const {
    createRide,
    getRides,
    stopRide,
    getOngoingRides
} = require('../controllers/ride');
const Ride = require('../models/Ride');

const router = express.Router();

router.route('/').get(protect, authorize('admin'), advancedFilter(Ride,[{
            path: 'passenger',
            select: 'name contact available'
        },
            {
                path: 'driver',
                select: 'name contact available'
        }]), getRides);
router.route('/:passengerId/:driverId')
    .post(protect, authorize('admin'), createRide);

router.route('/ride/:rideId/stop').post(protect, authorize('admin'), stopRide);

router.route('/rides/ongoing').get(protect, authorize('admin'), getOngoingRides);

module.exports = router;