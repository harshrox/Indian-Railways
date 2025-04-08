const Meals = require('../models/Meals')
const express = require('express')
const router = new express.Router

router.get('/meals', async (req, res) => {
    try {
        const meal = await Meals.find().populate('station'); // 👈 populate is key here
        res.render('meals', { meal });
    } catch (e) {
        console.error('Error fetching meals with station:', e);
        res.status(500).send('Something went wrong');
    }
});


module.exports = router