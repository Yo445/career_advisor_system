import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Reminder {
  title: string;
  description: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ReminderComponent implements OnInit {

  reminders: Reminder[] = [
    { title: 'Job Interview with Company X', description: 'Phone interview for a technical position.', date: '2025-10-25', time: '10:00' },
    { title: 'Apply for Company Y', description: 'Make sure to attach the updated resume.', date: '2025-10-30', time: '14:30' },
    { title: 'Follow-up with Company Z', description: 'Send a follow-up email after the interview.', date: '2025-11-05', time: '09:00' }
  ];

  showAddReminderForm: boolean = false;
  newReminder: Reminder = { title: '', description: '', date: '', time: '' };

  constructor() { }

  ngOnInit() {
  }

  addReminder() {
    this.showAddReminderForm = true;
    this.newReminder = { title: '', description: '', date: '', time: '' }; // Reset form
  }

  saveReminder() {
    if (this.newReminder.title && this.newReminder.description && this.newReminder.date && this.newReminder.time) {
      this.reminders.push({ ...this.newReminder });
      this.showAddReminderForm = false;
      this.newReminder = { title: '', description: '', date: '', time: '' }; // Clear form
    } else {
      alert('Please fill in all fields for the reminder.');
    }
  }

  cancelAddReminder() {
    this.showAddReminderForm = false;
    this.newReminder = { title: '', description: '', date: '', time: '' }; // Clear form
  }

}
