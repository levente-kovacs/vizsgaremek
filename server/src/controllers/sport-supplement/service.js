const SportSupplement = require('../../models/sport-supplement.model');

module.exports.create = data => {
    const entity = new  SportSupplement(data);
    return entity.save();
};

module.exports.findAll = () =>  SportSupplement.find().populate();

module.exports.findOne = id =>  SportSupplement.findById(id).populate();

module.exports.update = (id, updateData) =>  SportSupplement.findByIdAndUpdate(id, updateData, {new: true});

module.exports.delete = id =>  SportSupplement.findByIdAndRemove(id);
