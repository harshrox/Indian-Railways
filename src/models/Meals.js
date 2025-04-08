const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    outlets: String,
    time: String,
    phNo: Number,
    station: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Station',
        required: true
    }
})

module.exports = mongoose.model('Meals', userSchema);
