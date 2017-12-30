const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        label: {
            type: String,
            required: [true, 'label field is REQUIRED']
        },
        complete: {
            type: Boolean,
            default: false
        }
    }
);

const task = mongoose.model('task', taskSchema);

module.exports = task;