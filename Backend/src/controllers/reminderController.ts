import type { Request, Response } from 'express';
import Reminder from '../data/models/Reminder.js';

// Get all reminders
export const getReminders = async (req: Request, res: Response) => {
    try {
        const reminders = await Reminder.find().sort({ created_at: -1 });
        res.status(200).json(reminders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reminders', error });
    }
};

// Create a new reminder
export const createReminder = async (req: Request, res: Response) => {
    try {
        const { title, description, date, time, user_id } = req.body;

        // Validate required fields
        if (!title || !description || !date || !time) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newReminder = new Reminder({
            title,
            description,
            date,
            time,
            user_id
        });

        const savedReminder = await newReminder.save();
        res.status(201).json(savedReminder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating reminder', error });
    }
};

// Update a reminder
export const updateReminder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description, date, time } = req.body;

        const updatedReminder = await Reminder.findByIdAndUpdate(
            id,
            { title, description, date, time },
            { new: true, runValidators: true }
        );

        if (!updatedReminder) {
            return res.status(404).json({ message: 'Reminder not found' });
        }

        res.status(200).json(updatedReminder);
    } catch (error) {
        res.status(500).json({ message: 'Error updating reminder', error });
    }
};

// Delete a reminder
export const deleteReminder = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedReminder = await Reminder.findByIdAndDelete(id);

        if (!deletedReminder) {
            return res.status(404).json({ message: 'Reminder not found' });
        }

        res.status(200).json({ message: 'Reminder deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting reminder', error });
    }
};
