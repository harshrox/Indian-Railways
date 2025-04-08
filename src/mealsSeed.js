const mongoose = require('mongoose')
const Meals = require('./models/Meals') // update path if needed

mongoose.connect('mongodb://127.0.0.1:27017/IndianRailways', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to IndianRailways DB 🍽️')
}).catch((err) => {
    console.error(err)
})

const meals = [
    {
        outlets: 'Vinay Hotel',
        time: '8am to 5pm',
        phNo: 7993271333
    },
    {
        outlets: 'Annapurna Bhojnalaya',
        time: '6am to 10pm',
        phNo: 8987654321
    },
    {
        outlets: 'Rajdhani Dhaba',
        time: '7am to 11pm',
        phNo: 9876543210
    }
]

Meals.insertMany(meals)
    .then(() => {
        console.log('Meals inserted successfully ✅')
        mongoose.disconnect()
    })
    .catch((err) => {
        console.error('Error inserting meals ❌', err)
        mongoose.disconnect()
    })
