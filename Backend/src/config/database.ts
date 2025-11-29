import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/CareerAdvisorSystem');
        console.log('✅ Connected to MongoDB successfully');
    } catch (error) {
        console.error('❌ Could not connect to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
