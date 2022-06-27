const express = require('express');
const baseService = require('./service');
// const model = require('../../models/calorie-chart.model');


// const service = baseService(model);
// module.exports.findOne = (req, res, next) => {
//     return service.findAll()
//         .then( list => res.json(list) );
// };

module.exports = (model, populateList = []) => {
    const service = baseService(model, populateList);
    return {
        findAll(req, res, next) {
            return service.findAll()
                .then(list => res.json(list));
        },

        findOne(req, res, next) {
            return service.findOne(req.params.id)
                .then(entity => res.json(entity));
        },

        updateOne(req, res, next) {
            return service.update(req.params.id, req.body)
                .then(entity => res.json(entity))
                .catch(err => {
                    res.statusCode = 501;
                    res.json(err);
                });
        },

        createOne(req, res, next) {
            return service.create(req.body)
                .then(entity => {
                    res.json(entity)
                })
                .catch(err => {
                    res.statusCode = 501;
                    res.json(err);
                });
        },

        deleteOne(req, res, next) {
            return service.delete(req.params.id)
              .then( () =>{
                res.status(202);
                res.json('Delete successful.');
              });
          }

    };
};
