const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/IndianRailways', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})
