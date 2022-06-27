const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const CalorieChartSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         return /^[a-űA-Ű \-\.]{5,25}$/.test(v);
        //     }
        // }
    },
    foodGroup: {
        type: String,
        required: true
    },
    energy: {
        type: Number,
        required: true,
        default: 0,
    },
    kcal: {
        type: Number,
        required: true,
        default: 0,
    },
    protein: {
        type: Number,
        required: true,
        default: 0,
    },
    fat: {
        type: Number,
        required: true,
        default: 0,
    },
    carbohydrate: {
        type: Number,
        required: true,
        default: 0,
    },
    fiber: {
        type: Number,
        required: true,
        default: 0,
    },
    cholesterol: {
        type: Number,
        required: true,
        default: 0,
    },

}, {
    timestamps: true
});

CalorieChartSchema.plugin(idValidator);

module.exports = mongoose.model('Calorie-Chart', CalorieChartSchema);
