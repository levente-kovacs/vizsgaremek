const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const SportSupplementSchema = mongoose.Schema({
    manufacturer: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true,
        // validate: {
        //     validator: function(v) {
        //         return /^[a-űA-Ű \-\.]{5,25}$/.test(v);
        //     }
        // }
    },
    image: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    dosing: {
        type: String,
        required: true,
    },
    allergen: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },

}, {
    timestamps: true
});

SportSupplementSchema.plugin(idValidator);

module.exports = mongoose.model('Sport-Supplement', SportSupplementSchema);
