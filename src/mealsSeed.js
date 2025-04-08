const mongoose = require('mongoose');
const Station = require('./models/station');
const Meals = require('./models/Meals');

mongoose.connect('mongodb://127.0.0.1:27017/IndianRailways', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB 🚆🍽️');
    return Station.find({});
}).then((stations) => {
    const meals = [
        {
            outlets: 'Vinay Hotel',
            time: '8am to 5pm',
            phNo: 7993271333,
            station: stations[0]._id // Howrah Junction
        },
        {
            outlets: 'Annapurna Bhojnalaya',
            time: '6am to 10pm',
            phNo: 8987654321,
            station: stations[1]._id // Mumbai CST
        },
        {
            outlets: 'Rajdhani Dhaba',
            time: '7am to 11pm',
            phNo: 9876543210,
            station: stations[2]._id // Chennai Central
        }
    ];

    return Meals.insertMany(meals);
}).then(() => {
    console.log('Meals inserted successfully with station references ✅');
    mongoose.disconnect();
}).catch((err) => {
    console.error('Error:', err);
    mongoose.disconnect();
});
