# ⚙️ JOB APPLICATIONS MODULE — OVERVIEW

### 🧩 Core Routes / Pages / Modals

| Route / Modal                | Purpose                               | Type         |
| ---------------------------- | ------------------------------------- | ------------ |
| `/applications`              | View & manage all applications        | Page         |
| `/applications/new`          | Add a new job application             | Page / Modal |
| `/applications/:id`          | View or edit a single job application | Page         |
| `/applications/delete/:id`   | Confirm deletion of application       | Modal        |
| `/applications/reminder/:id` | Set or update reminder                | Modal        |
| `/applications/notes/:id`    | Add or view notes                     | Modal        |

---

## 🔹 1. `/applications` — Applications List Page

### **Purpose**

The main page for users to see all their job applications, track progress, and access details.

### **Core UI Sections**

```
------------------------------------------------------
| Header: "My Job Applications" + [Add New Button]   |
------------------------------------------------------
| Search bar | Filter by Status | Filter by Source   |
------------------------------------------------------
| List or Card View of Applications                  |
|----------------------------------------------------|
| ApplicationCardComponent (repeated)                |
|  - Job Title                                       |
|  - Company                                         |
|  - Status Dropdown                                |
|  - Date Applied                                   |
|  - Reminder (if set)                              |
|  - [Edit] [Delete] [View]                         |
------------------------------------------------------
```

### **Components**

* `ApplicationListPageComponent`
* `ApplicationCardComponent`
* `SearchFilterComponent`
* `ConfirmDeleteModalComponent`

### **Data Actions**

| Action   | Description                              | API                            |
| -------- | ---------------------------------------- | ------------------------------ |
| View All | Fetch all applications for the user      | `GET /api/applications`        |
| Filter   | Filter applications by status or company | Client-side                    |
| Delete   | Remove a record                          | `DELETE /api/applications/:id` |
| Edit     | Redirect to detail/edit page             | —                              |

---

## 🔹 2. `/applications/new` — Create New Application Page / Modal

### **Purpose**

Add a new job application (manual entry or from job listing).

### **Core UI**

```
------------------------------------------------------
| Header: "Add New Application"                      |
------------------------------------------------------
| Company Name [input]                               |
| Job Title [input]                                  |
| Source [dropdown: LinkedIn / Glassdoor / Website]  |
| Application Status [dropdown]                      |
| Date Applied [date picker]                         |
| Reminder Date [date picker]                        |
| Job Link [optional input]                          |
| Notes [textarea]                                   |
------------------------------------------------------
| [Save] [Cancel]                                    |
------------------------------------------------------
```

### **Components**

* `ApplicationFormComponent` (shared with edit)
* `FormValidationDirective`

### **Data Example**

```json
{
  "companyName": "Microsoft",
  "jobTitle": "Frontend Developer",
  "status": "Applied",
  "source": "LinkedIn",
  "dateApplied": "2025-10-10",
  "reminderDate": "2025-10-17",
  "jobLink": "https://linkedin.com/jobs/12345",
  "notes": "Referred by John Doe"
}
```

### **Backend Integration**

| Action  | API                 | Method |
| ------- | ------------------- | ------ |
| Add New | `/api/applications` | POST   |

---

## 🔹 3. `/applications/:id` — Application Detail / Edit Page

### **Purpose**

Show detailed view of a single application and allow editing of fields.

### **UI Structure**

```
------------------------------------------------------
| Header: "Application Details"                      |
------------------------------------------------------
| [Edit Mode Toggle]                                 |
------------------------------------------------------
| Company: Google                                    |
| Job Title: Frontend Developer                      |
| Source: LinkedIn                                   |
| Status: Interviewing (dropdown editable)           |
| Date Applied: Oct 5, 2025                          |
| Reminder: Oct 15, 2025                             |
| Notes: “Follow up after HR email”                  |
------------------------------------------------------
| Buttons: [Save Changes] [Delete] [Set Reminder]    |
------------------------------------------------------
```

### **Components**

* `ApplicationDetailComponent`
* `ApplicationFormComponent` (for inline editing)
* `ReminderModalComponent`
* `NotesModalComponent`

### **Data Actions**

| Action       | Description                  | API                            |
| ------------ | ---------------------------- | ------------------------------ |
| View         | Get single application by ID | `GET /api/applications/:id`    |
| Edit         | Update record                | `PUT /api/applications/:id`    |
| Delete       | Remove record                | `DELETE /api/applications/:id` |
| Set Reminder | Add or edit reminder         | `PATCH /api/applications/:id`  |

---

## 🔹 4. `Delete Confirmation` Modal — `/applications/delete/:id`

### **Purpose**

Confirm before deleting a job application.

### **UI**

```
--------------------------------------
| 🗑️  Delete Application              |
|------------------------------------|
| Are you sure you want to delete    |
| “Frontend Developer - Google”?     |
| This action cannot be undone.      |
--------------------------------------
| [Delete] [Cancel]                  |
--------------------------------------
```

### **Components**

* `ConfirmDeleteModalComponent`

### **Logic**

* Triggered from delete button on `/applications`
* Calls API → `DELETE /api/applications/:id`
* On success → Refresh list or navigate back

---

## 🔹 5. `Reminder Modal` — `/applications/reminder/:id`

### **Purpose**

Add or update reminder for follow-up or interview.

### **UI**

```
--------------------------------------
| ⏰  Set Reminder                    |
|------------------------------------|
| Reminder Date: [Date Picker]       |
| Reminder Note: [Input]             |
--------------------------------------
| [Save Reminder] [Cancel]           |
--------------------------------------
```

### **Backend Integration**

| Action              | API                              | Method |
| ------------------- | -------------------------------- | ------ |
| Set/Update Reminder | `/api/applications/:id/reminder` | PATCH  |

---

## 🔹 6. `Notes Modal` — `/applications/notes/:id`

### **Purpose**

Quickly add or review additional notes about an application (e.g., recruiter info, feedback, interview details).

### **UI**

```
--------------------------------------
| 📝  Application Notes               |
|------------------------------------|
| Notes:                             |
| [Text Area]                        |
--------------------------------------
| [Save] [Cancel]                    |
--------------------------------------
```

### **Backend Integration**

| Action         | API                           | Method |
| -------------- | ----------------------------- | ------ |
| Add/Edit Notes | `/api/applications/:id/notes` | PATCH  |

---

# 📘 Example Angular Module Structure

```
src/app/pages/applications/
├── applications-list/
│   ├── applications-list.component.ts
│   ├── applications-list.component.html
│   └── applications-list.component.css
├── application-form/
│   ├── application-form.component.ts
│   ├── application-form.component.html
│   └── application-form.component.css
├── application-detail/
│   ├── application-detail.component.ts
│   ├── application-detail.component.html
│   └── application-detail.component.css
├── modals/
│   ├── confirm-delete-modal.component.ts
│   ├── reminder-modal.component.ts
│   ├── notes-modal.component.ts
│   └── ...
└── application.service.ts
```

---

# 🗄️ Example Database Models (SQL / Mongo)

### **User Table**

```
id | name | email | password | createdAt | updatedAt
```

### **Applications Table**

```
id | userId | companyName | jobTitle | status | source | jobLink | dateApplied | reminderDate | notes | createdAt | updatedAt
```

---

# 🧠 Optional Enhancements (Later Phases)

* **Tags/Labels:** e.g., “Remote”, “Urgent”, “Dream Job”
* **Attach Resume Version:** Upload file reference
* **Integration with Job Sources:** Pre-fill fields when “Save from LinkedIn” is clicked
* **Calendar Integration:** Sync reminders with Google Calendar

---

# ✅ Summary Table

| Page / Modal        | Purpose                | API                   | Key Components       |
| ------------------- | ---------------------- | --------------------- | -------------------- |
| `/applications`     | View & manage all apps | `GET`, `DELETE`       | List + Card + Filter |
| `/applications/new` | Add application        | `POST`                | Form + Validation    |
| `/applications/:id` | View/edit details      | `GET`, `PUT`, `PATCH` | Detail + Form        |
| `DeleteModal`       | Confirm delete         | `DELETE`              | Modal                |
| `ReminderModal`     | Add reminder           | `PATCH`               | Modal                |
| `NotesModal`        | Add/view notes         | `PATCH`               | Modal                |

---

Would you like me next to **design the UI (HTML + Tailwind)** for these pages and modals — or create a **navigation flow diagram** showing how users move between them (like a UX map)?
