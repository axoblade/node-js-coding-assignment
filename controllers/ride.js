const Driver = require("../models/Driver");
const Ride = require("../models/Ride");
const Passenger = require('../models/Passenger');
const errorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const advancedFilter = require('../middleware/filter');
const { verify } = require("jsonwebtoken");

//create a new passenger
//route POST /api/v1/passenger/
//access protected
exports.createRide = asyncHandler(async (req, res, next) => {
    if (!req.params.passengerId) {
        res.status(400).json({
            success: false,
            msg: "Passenger Id is required"
        });
    } else {
        if (!req.params.driverId) {
            res.status(400).json({
                success: false,
                msg: "Driver Id is required"
            });
        } else {
            const isPassengerAvailable = await getStatus(Passenger, req.params.passengerId);
            if (isPassengerAvailable != "Available") {
                res.status(401).json({
                    success: false,
                    msg: "Passenger " + isPassengerAvailable
                });
            } else {
                const isDriverAvailable = await getStatus(Driver, req.params.driverId);
                if (isDriverAvailable != "Available") {
                    res.status(401).json({
                        success: false,
                        msg: "Driver " + isDriverAvailable
                    });
                } else {
                    const data = await Ride.create({ passenger: req.params.passengerId, driver: req.params.driverId, pickupPoint : req.body.pickupPoint, destinationPoint : req.body.destinationPoint });
                    if (data) {
                        await Passenger.findByIdAndUpdate(req.params.passengerId, { available: false });
                        await Driver.findByIdAndUpdate(req.params.driverId, { available: false });
                    }
                    res.status(201).json({
                        success: true,
                        msg: "SUCCESS",
                        data
                    });
                }
            }
        }
    }

});

//get all rides
//route GET /api/v1/ride/
//access protected
exports.getRides = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedFilter);
});

//stop a ride
//route GET /api/v1/ride/rideId/stop
//access protected
exports.stopRide = asyncHandler(async (req, res, next) => {
    const rideData = await Ride.findById(req.params.rideId);
    if (rideData) {
        const driver = rideData.driver;
        const passenger = rideData.passenger;

        console.log("Driver Id", driver);
        console.log("Passenger Id", passenger);
        await Driver.findByIdAndUpdate(driver, { available: true });
        await Passenger.findByIdAndUpdate(passenger, { available: true });

        const data = await Ride.findByIdAndUpdate(req.params.rideId, { status: "done" }, { new: true, runValidators: true });

        if (data) {
            res.status(200).json({
                success: false,
                msg: "SUCCESS",
                data
            });
        } else {
            res.status(400).json({
                success: false,
                msg: "Error completing ride"
            });
        }

    } else {
        res.status(404).json({
            success: false,
            msg: "Ride details not found"
        });
    }
});


//get all on going rides
//route GET /api/v1/rides/ongoing
//access protected
exports.getOngoingRides = asyncHandler(async (req, res, next) => {
    data = await Ride.find({ status: 'ongoing' });
    res.status(200).json({
        success: false,
        msg: "SUCCESS",
        data
    });
});

//function to check the status of a specific model
async function getStatus(Model, modelId) {
    const res = await Model.findById(modelId);
    //console.log("Model Response", res);
    if (res) {
        return res.available && !res.suspended ? "Available" : "not available at the moment";
    }
    return "records do not exist";
}
