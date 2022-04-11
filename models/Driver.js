const mongoose = require('mongoose');

const DriverSchema = new mongoose.Schema({
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
    suspended: {
        type: Bool,
        enum: [true,false],
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Driver', DriverSchema);