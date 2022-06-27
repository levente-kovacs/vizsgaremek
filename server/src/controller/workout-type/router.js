const express = require('express');
const WorkoutType = require('../../models/workout-type.model');
const controller = require('../base/controller')(WorkoutType);

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
    return controller.deleteOne(req, res, next);
});

module.exports = router;
