const Passenger = require('../models/Passenger');
const errorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const advancedFilter = require('../middleware/filter');

//create a new passenger
//route POST /api/v1/passenger/
//access protected
exports.createPassenger = asyncHandler(async (req, res, next) => {

    const { name, contact } = req.body;
    
    const passenger = await Passenger.create({
        name,
        contact
    });
    
    res.status(201).json({
        success: true,
        msg: "SUCCESS",
        passenger
    });

});

//get all passengers
//route GET /api/v1/passenger/
//access protected
exports.getPassengers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedFilter);
});
