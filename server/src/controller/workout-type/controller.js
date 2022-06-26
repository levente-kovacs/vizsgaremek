const baseService = require('../base/service');
const WorkoutType = require('../../models/workout-type.model');

const service = baseService(WorkoutType);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};
