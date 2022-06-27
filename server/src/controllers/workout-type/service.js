const WorkoutType = require('../../models/workout-type.model');

module.exports.create = data => {
    const entity = new WorkoutType(data);
    return entity.save();
};

module.exports.findAll = () => WorkoutType.find().populate();

module.exports.findOne = id => WorkoutType.findById(id).populate();

module.exports.update = (id, updateData) => WorkoutType.findByIdAndUpdate(id, updateData, {new: true});

module.exports.delete = id => WorkoutType.findByIdAndRemove(id);
