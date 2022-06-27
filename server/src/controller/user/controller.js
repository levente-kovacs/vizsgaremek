const baseService = require('../base/service');
const User = require('../../models/user.model');

const service = baseService(User);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};
