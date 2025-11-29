import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// 1. Initialize App
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// 2. Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CareerAdvisorSystem')
    .then(() => console.log(" Connected to MongoDB Successfully"))
    .catch(err => console.error("Could not connect to MongoDB", err));

// ================= SCHEMAS & MODELS =================

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['User', 'Admin'], default: 'User' },
    created_at: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

// User Profile Schema
const userProfileSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    name: { type: String, required: true },
    phone: String,
    address: String,
    skills: [String],
    experience: String,
    updated_at: { type: Date, default: Date.now }
});
const UserProfile = mongoose.model('UserProfile', userProfileSchema);

// CV Schema
const cvSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    file_path: { type: String, required: true },
    uploaded_at: { type: Date, default: Date.now }
});
const CV = mongoose.model('CV', cvSchema);

// Jobs Schema
const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    description: String,
    location: String,
    requirements: String,
    posted_at: { type: Date, default: Date.now }
});
const Job = mongoose.model('Job', jobSchema);

// Application Schema
const applicationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    job_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    status: { type: String, enum: ['Applied', 'Interview', 'Accepted', 'Rejected'], default: 'Applied' },
    applied_date: { type: Date, default: Date.now }
});
const Application = mongoose.model('Application', applicationSchema);

// ================= ROUTES =================

app.get('/', (req, res) => {
    res.send('Career Advisor System API is Running...');
});

app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/jobs', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 3. Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
});