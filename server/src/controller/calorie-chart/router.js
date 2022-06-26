const express = require('express');
const CalorieChart = require('../../models/calorie-chart.model');
const controller = require('../base/controller')(CalorieChart);

const router = express.Router();

// get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next);
});

// patch
router.patch('/:id', (req, res, next) => {
    return controller.updateOne(req, res, next);
});

// post
router.post('/', (req, res, next) => {
    return controller.createOne(req, res, next);
});

// delete
router.delete('/:id', async (req, res, next) => {
    console.log('router id: ', req.params.id)
    return controller.deleteOne(req, res, next);
});

module.exports = router;

/*
fetch('http://localhost:3000/product', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${temp1.accessToken}`
    },
}).then(r => r.json())
    .then( d => console.log(d) );
*/
