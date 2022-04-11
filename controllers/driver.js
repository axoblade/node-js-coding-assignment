const Driver = require('../models/Driver');
const errorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const advancedFilter = require('../middleware/filter');

//create a new driver
//route POST /api/v1/driver/
//access public
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