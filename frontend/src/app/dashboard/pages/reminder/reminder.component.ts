import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReminderService, Reminder } from '../../../services/reminder.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class ReminderComponent implements OnInit {

  reminders: Reminder[] = [];
  showAddReminderForm: boolean = false;
  newReminder: Reminder = { title: '', description: '', date: '', time: '' };
  isLoading: boolean = false;
  errorMessage: string = '';
  isEditMode: boolean = false;
  editingReminderId: string = '';

  constructor(private reminderService: ReminderService) { }

  ngOnInit() {
    this.loadReminders();
  }

  loadReminders() {
    this.isLoading = true;
    this.reminderService.getReminders().subscribe({
      next: (data) => {
        this.reminders = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading reminders:', error);
        this.errorMessage = 'Failed to load reminders. Please make sure the backend server is running.';
        this.isLoading = false;
      }
    });
  }

  addReminder() {
    this.isEditMode = false;
    this.showAddReminderForm = true;
    this.newReminder = { title: '', description: '', date: '', time: '' };
  }

  editReminder(reminder: Reminder) {
    this.isEditMode = true;
    this.editingReminderId = reminder._id || '';
    this.newReminder = { ...reminder };
    this.showAddReminderForm = true;
  }

  saveReminder() {
    if (this.newReminder.title && this.newReminder.description && this.newReminder.date && this.newReminder.time) {
      this.isLoading = true;

      if (this.isEditMode && this.editingReminderId) {
        // Update existing reminder
        this.reminderService.updateReminder(this.editingReminderId, this.newReminder).subscribe({
          next: (updatedReminder) => {
            const index = this.reminders.findIndex(r => r._id === this.editingReminderId);
            if (index !== -1) {
              this.reminders[index] = updatedReminder;
            }
            this.showAddReminderForm = false;
            this.resetForm();
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error updating reminder:', error);
            this.errorMessage = 'Failed to update reminder. Please try again.';
            this.isLoading = false;
          }
        });
      } else {
        // Create new reminder
        this.reminderService.createReminder(this.newReminder).subscribe({
          next: (savedReminder) => {
            this.reminders.unshift(savedReminder);
            this.showAddReminderForm = false;
            this.resetForm();
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error creating reminder:', error);
            this.errorMessage = 'Failed to save reminder. Please try again.';
            this.isLoading = false;
          }
        });
      }
    } else {
      alert('Please fill in all fields for the reminder.');
    }
  }

  deleteReminder(id: string | undefined) {
    if (!id) return;

    if (confirm('Are you sure you want to delete this reminder?')) {
      this.isLoading = true;
      this.reminderService.deleteReminder(id).subscribe({
        next: () => {
          this.reminders = this.reminders.filter(r => r._id !== id);
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error deleting reminder:', error);
          this.errorMessage = 'Failed to delete reminder. Please try again.';
          this.isLoading = false;
        }
      });
    }
  }

  cancelAddReminder() {
    this.showAddReminderForm = false;
    this.resetForm();
  }

  resetForm() {
    this.newReminder = { title: '', description: '', date: '', time: '' };
    this.errorMessage = '';
    this.isEditMode = false;
    this.editingReminderId = '';
  }

}

