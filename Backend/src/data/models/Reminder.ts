import mongoose from 'mongoose';

// Reminder Schema
const reminderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Reminder = mongoose.model('Reminder', reminderSchema);

export default Reminder;
