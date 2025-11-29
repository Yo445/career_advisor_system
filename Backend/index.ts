import mongoose from 'mongoose';

// 1. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CareerAdvisorSystem', {
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));


// ================= SCHEMAS & MODELS =================

// --- 1. User Schema ---
const userSchema = new mongoose.Schema({
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

const User = mongoose.model('User', userSchema);


// --- 2. User Profile Schema ---
const userProfileSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
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
userProfileSchema.pre('save', function(next) {
    this.updated_at = new Date();
    next();
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);


// --- 3. CV Schema ---
const cvSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    file_path: { type: String, required: true },
    uploaded_at: { 
        type: Date, 
        default: Date.now 
    }
});

const CV = mongoose.model('CV', cvSchema);


// --- 4. Jobs Schema ---
const jobSchema = new mongoose.Schema({
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

const Job = mongoose.model('Job', jobSchema);


// --- 5. Application Schema ---
const applicationSchema = new mongoose.Schema({
    user_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    job_id: { 
        type: mongoose.Schema.Types.ObjectId, 
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

const Application = mongoose.model('Application', applicationSchema);


// ================= EXPORTS =================
export {
    User,
    UserProfile,
    CV,
    Job,
    Application
};

// createInitialData(); // Uncomment and define this function if needed
