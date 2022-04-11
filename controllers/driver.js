const Driver = require('../models/Driver');
const errorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const advancedFilter = require('../middleware/filter');

//create a new driver
//route POST /api/v1/driver/
//access protected
exports.createDriver = asyncHandler(async (req, res, next) => {

    const { name, contact } = req.body;
    
    const driver = await Driver.create({
        name,
        contact
    });
    
    res.status(201).json({
        success: true,
        msg: "SUCCESS",
        driver
    });

});

//create a new driver
//route GET /api/v1/driver/
//access protected
exports.getDriver = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedFilter);
});

//suspend a driver
//route POST /api/v1/driver/DRIVER_ID/suspend
//access protected
exports.suspendDriver = asyncHandler(async (req, res, next) => {
    const data = await Driver.findByIdAndUpdate(req.params.driverId, {suspended : true}, {
        new: true,
        runValidators: true
    });
    if (!data) {
        return res.status(404).json({
            success: false,
            msg: `Driver not found`
        });
    } else {
        res.status(204).json({
            success: true,
            msg: `SUCCESS`,
            data: data
        });
    }
});

//delete a driver suspay
//route DELETE /api/v1/driver/driverID/suspend
//access protected
exports.suspendDriverReverse = asyncHandler(async (req, res, next) => {
    const data = await Driver.findByIdAndUpdate(req.params.driverId, {suspended : false}, {
        new: true,
        runValidators: true
    });
    if (!data) {
        return res.status(404).json({
            success: false,
            msg: `Driver not found`
        });
    } else {
        res.status(204).json({
            success: true,
            msg: `SUCCESS`,
            data: data
        });
    }
});