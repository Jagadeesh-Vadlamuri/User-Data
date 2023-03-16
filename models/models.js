var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('userData', userSchema);

module.exports = userModel;