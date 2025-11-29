"use strict";
import mongoose from 'mongoose';

// 1. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CareerAdvisorSystem', {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// ================= SCHEMAS & MODELS =================
// --- 1. User Schema ---
var userSchema = new mongoose.default.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
var User = mongoose.default.model('User', userSchema);
export { User, UserProfile, CV, Job, Application };
var userProfileSchema = new mongoose.default.Schema({
    user_id: {
        type: mongoose.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    name: { type: String, required: true },
    phone: String,
    address: String,
    skills: [String],
    experience: String,
    updated_at: {
        type: Date,
        default: Date.now
    }
});
// Middleware 
userProfileSchema.pre('save', function (next) {
    this.updated_at = new Date();
    next();
});
var UserProfile = mongoose.default.model('UserProfile', userProfileSchema);

var cvSchema = new mongoose.default.Schema({
    user_id: {
        type: mongoose.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    file_path: { type: String, required: true },
    uploaded_at: {
        type: Date,
        default: Date.now
    }
});
var CV = mongoose.default.model('CV', cvSchema);
//--export { CV };
// --- 4. Jobs Schema ---
var jobSchema = new mongoose.default.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    description: String,
    location: String,
    requirements: String,
    posted_at: {
        type: Date,
        default: Date.now
    }
});
var Job = mongoose.default.model('Job', jobSchema);
//exports.Job = Job;
// --- 5. Application Schema ---
var applicationSchema = new mongoose.default.Schema({
    user_id: {
        type: mongoose.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    job_id: {
        type: mongoose.default.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    status: {
        type: String,
        enum: ['Applied', 'Interview', 'Accepted', 'Rejected'],
        default: 'Applied'
    },
    applied_date: {
        type: Date,
        default: Date.now
    },
    last_update: {
        type: Date,
        default: Date.now
    }
});
var Application = mongoose.default.model('Application', applicationSchema);
// createInitialData(); // Uncomment and define this function if needed
