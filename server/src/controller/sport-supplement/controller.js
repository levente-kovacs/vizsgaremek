const baseService = require('../base/service');
const SportSupplement = require('../../models/sport-supplement.model');

const service = baseService(SportSupplement);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};
