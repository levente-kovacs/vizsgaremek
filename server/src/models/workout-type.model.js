const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const WorkoutTypeSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         return /^[a-űA-Ű \-\.]{5,25}$/.test(v);
        //     }
        // }
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },

}, {
    timestamps: true
});

WorkoutTypeSchema.plugin(idValidator);

module.exports = mongoose.model('Workout-Type', WorkoutTypeSchema);
