const mongoose = require('mongoose');

const PassengerSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength:[75,'Name should not exceed 75 characters']
    },
    contact: {
        type: String,
        required: [true, 'Please add a phone number'],
        maxlength: [15, 'Phone number should not exceed 15 characters'],
        unique: [true, 'Phone number already exists']
    },
    available: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Passenger', PassengerSchema);