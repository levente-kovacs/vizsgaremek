const baseService = require('../base/service');
const WorkoutExercise = require('../../models/workout-exercise.model');

const service = baseService(WorkoutExercise);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};
