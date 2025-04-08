const mongoose = require('mongoose')
const Train = require('./models/train') // adjust if your path is different

mongoose.connect('mongodb://127.0.0.1:27017/IndianRailways', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected')
}).catch((err) => {
    console.log(err)
})

const trains = [
    {
        trName: 'Majra Express',
        trNo: 20,
        start: 'Ahmedabad',
        end: 'New Delhi',
        runsOn: [
            { days: 'Monday' },
            { days: 'Wednesday' },
            { days: 'Sunday' }
        ],
        date: new Date()
    },
    {
        trName: 'Rajdhani Express',
        trNo: 21,
        start: 'Chennai',
        end: 'Kolkata',
        runsOn: [
            { days: 'Tuesday' },
            { days: 'Friday' }
        ],
        date: new Date()
    },
    {
        trName: 'Shatabdi Express',
        trNo: 22,
        start: 'Mumbai',
        end: 'Bangalore',
        runsOn: [
            { days: 'Saturday' },
            { days: 'Sunday' }
        ],
        date: new Date()
    }
]

Train.insertMany(trains)
    .then(() => {
        console.log('Sample trains inserted ')
        mongoose.disconnect()
    })
    .catch((err) => {
        console.log('Error inserting trains ', err)
    })
