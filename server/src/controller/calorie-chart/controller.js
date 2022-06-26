const baseService = require('../base/service');
const CalorieChart = require('../../models/calorie-chart.model');

const service = baseService(CalorieChart);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};
