const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    passenger: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Passenger',
        required: true
    },
    driver: {
        type: [mongoose.Schema.ObjectId],
        ref: 'Driver',
        required: true
    },
    pickupPoint: {
        type: [Number],
        index: '2dsphere',
        required : [true, "Please provide a Pickup point"]
    },
    destinationPoint: {
        type: [Number],
        index: '2dsphere',
        required : [true, "Please provide a destination point"]
    },
    status: {
        type: String,
        enum: ['ongoing','done'],
        default: 'ongoing'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Ride', RideSchema);