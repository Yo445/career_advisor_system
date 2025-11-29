import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reminder {
    _id?: string;
    title: string;
    description: string;
    date: string;
    time: string;
    user_id?: string;
    created_at?: Date;
}

@Injectable({
    providedIn: 'root'
})
export class ReminderService {
    private apiUrl = 'http://localhost:8000/api/reminders';

    constructor(private http: HttpClient) { }

    // Get all reminders
    getReminders(): Observable<Reminder[]> {
        return this.http.get<Reminder[]>(this.apiUrl);
    }

    // Create a new reminder
    createReminder(reminder: Reminder): Observable<Reminder> {
        return this.http.post<Reminder>(this.apiUrl, reminder);
    }

    // Update a reminder
    updateReminder(id: string, reminder: Reminder): Observable<Reminder> {
        return this.http.put<Reminder>(`${this.apiUrl}/${id}`, reminder);
    }

    // Delete a reminder
    deleteReminder(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
