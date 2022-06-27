const WorkoutExercise = require('../../models/workout-exercise.model');

module.exports.create = data => {
    const entity = new WorkoutExercise(data);
    return entity.save();
};

module.exports.findAll = () => WorkoutExercise.find().populate();

module.exports.findOne = id => WorkoutExercise.findById(id).populate();

module.exports.update = (id, updateData) => WorkoutExercise.findByIdAndUpdate(id, updateData, {new: true});

module.exports.delete = id => WorkoutExercise.findByIdAndRemove(id);
