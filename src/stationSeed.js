const mongoose = require('mongoose')
const Station = require('./models/station') // update path if needed

mongoose.connect('mongodb://127.0.0.1:27017/IndianRailways', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected')
}).catch((err) => {
    console.error(err)
})

const stations = [
    {
        stName: 'Howrah Junction',
        trainName: 'Duronto Express',
        trainNo: '12246',
        origin: 'Sealdah',
        destination: 'New Delhi',
        noOfPlatform: 23
    },
    {
        stName: 'Mumbai CST',
        trainName: 'Deccan Queen',
        trainNo: '12123',
        origin: 'Mumbai',
        destination: 'Pune',
        noOfPlatform: 18
    },
    {
        stName: 'Chennai Central',
        trainName: 'Coromandel Express',
        trainNo: '12841',
        origin: 'Chennai',
        destination: 'Kolkata',
        noOfPlatform: 17
    }
]

Station.insertMany(stations)
    .then(() => {
        console.log('Stations inserted')
        mongoose.disconnect()
    })
    .catch((err) => {
        console.error('Error inserting stations', err)
        mongoose.disconnect()
    })
