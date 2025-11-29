import express from 'express';
import cors from 'cors';
import connectDB from './config/database.js';
import reminderRoutes from './routes/reminderRoutes.js';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: 'http://localhost:4200', // Angular default port
    credentials: true
}));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Career Advisor System Backend API");
});

app.use("/api/reminders", reminderRoutes);

// Start server
app.listen(8000, () => {
    console.log("🚀 Server is running on port 8000");
    console.log("📍 API available at: http://localhost:8000");
});

export default app;
