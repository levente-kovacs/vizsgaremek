const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const CalorieChartSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
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

// export class CalorieChart {
//     _id: string = '';
//     name: string = '';
//     foodGroup: string = '';
//     energy: number = 0;
//     kcal: number = 0;
//     protein: number = 0;
//     fat: number = 0;
//     carbohydrate: number = 0;
//     fiber: number = 0;
//     cholesterol: number = 0;
// }
  