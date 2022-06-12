const CalorieChart = require('../../models/calorie-chart.model');

module.exports.create = data => {
    const entity = new CalorieChart(data);
    return entity.save();
};

module.exports.findAll = () => CalorieChart.find().populate();

module.exports.findOne = id => CalorieChart.findById(id).populate();

module.exports.update = (id, updateData) => CalorieChart.findByIdAndUpdate(id, updateData, {new: true});

module.exports.delete = id => CalorieChart.findByIdAndRemove(id);
