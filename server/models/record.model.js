const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const recordSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, 'Title is required.'],
        minLength: [3, 'Title must be at least three characters.']
    },
    artist: {
        type: String,
        required: [true, 'Artist is required.'],
        minLength: [3, 'Artist must be at least three characters.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minLength: [3, 'Description must be at least three characters.']
    },
}, {timestamps: true});

recordSchema.plugin(uniqueValidator);

const Record = mongoose.model('Record', recordSchema);
module.exports = Record;