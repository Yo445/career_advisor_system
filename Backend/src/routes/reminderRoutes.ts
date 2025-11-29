import express from 'express';
import { getReminders, createReminder, updateReminder, deleteReminder } from '../controllers/reminderController.js';

const router = express.Router();

// GET all reminders
router.get('/', getReminders);

// POST create new reminder
router.post('/', createReminder);

// PUT update reminder by ID
router.put('/:id', updateReminder);

// DELETE reminder by ID
router.delete('/:id', deleteReminder);

export default router;
