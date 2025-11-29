import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  category: string;
  level: string;
  tags: string[];
  description: string;
  postedDays: number;
  publisher: 'linkedin' | 'glassdoor';
}

@Component({
  selector: 'app-job-applications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './job-applications.component.html',
  styleUrl: './job-applications.component.css'
})
export class JobApplicationsComponent {
  jobs: Job[] = [
    {
      id: 1,
      title: 'Front End Developer',
      company: 'nichepharma',
      location: 'Sheikh Zayed, Giza',
      type: 'Internship',
      category: 'Remote',
      level: 'Entry Level',
      tags: ['Student', '0-1 Yrs of Exp', 'Bootstrap', 'Angular', 'Computer Science', 'CSS3', 'front-end', 'Git', 'HTML5', 'JavaScript'],
      description: '',
      postedDays: 16,
      publisher: 'linkedin'
    },
    {
      id: 2,
      title: 'Wordpress Developer',
      company: 'Confidential',
      location: 'Cairo, Egypt',
      type: 'Full Time',
      category: 'Remote',
      level: 'Mid Level',
      tags: ['Mid Level', '0-3 Yrs of Exp', 'WordPress', 'CSS', 'HTML', 'IT/Software Development', 'Engineering', 'Telecom/Technology'],
      description: '',
      postedDays: 2,
      publisher: 'glassdoor',
    },
    {
      id: 3,
      title: 'Backend Developer',
      company: 'Confidential',
      location: 'Cairo, Egypt',
      type: 'Full Time',
      category: 'Remote',
      level: 'Senior Level',
      tags: ['Senior Level', '0-3 Yrs of Exp', 'WordPress', 'CSS', 'HTML', 'IT/Software Development', 'Engineering', 'Telecom/Technology'],
      description: '',
      postedDays: 2,
      publisher: 'glassdoor'
    }
    ,
    {
      id: 4,
      title: 'Backend Developer',
      company: 'Confidential',
      location: 'Cairo, Egypt',
      type: 'Full Time',
      category: 'Remote',
      level: 'Entry Level',
      tags: ['Entry Level', '0-3 Yrs of Exp', 'WordPress', 'CSS', 'HTML', 'IT/Software Development', 'Engineering', 'Telecom/Technology'],
      description: '',
      postedDays: 2,
      publisher: 'linkedin'
    }

  ];
  searchText = '';
  selectedCountry = '';
  selectedLevel = '';

  newApp = { company: '', role: '', date: '' };

  // Reminder-style overlay control
  showAddApplicationForm = false;
  // edit / delete modal state (for future UI or actions)
  selectedJob: Job | null = null;
  showEditModal = false;
  showDeleteModal = false;

  openEditModal(job: Job) {
    this.selectedJob = { ...job };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.selectedJob = null;
    this.showEditModal = false;
  }

  openDeleteModal(job: Job) {
    this.selectedJob = job;
    this.showDeleteModal = true;
  }

  closeDeleteModal() {
    this.selectedJob = null;
    this.showDeleteModal = false;
  }

  saveEdit() {
    if (!this.selectedJob) return;
    const idx = this.jobs.findIndex(j => j.id === this.selectedJob!.id);
    if (idx !== -1) this.jobs[idx] = { ...this.selectedJob };
    this.closeEditModal();
  }

  confirmDelete() {
    if (!this.selectedJob) return;
    this.jobs = this.jobs.filter(j => j.id !== this.selectedJob!.id);
    this.closeDeleteModal();
  }

  get filteredJobs(): Job[] {
    return this.jobs.filter(job => {
      const matchesSearch =
        this.searchText.trim() === '' ||
        job.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        job.company.toLowerCase().includes(this.searchText.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(this.searchText.toLowerCase()));

      const matchesCountry =
        this.selectedCountry === '' ||
        job.location.toLowerCase().includes(this.selectedCountry.toLowerCase());

      const matchesLevel =
        this.selectedLevel === '' ||
        job.level.toLowerCase() === this.selectedLevel.toLowerCase();

      return matchesSearch && matchesCountry && matchesLevel;
    });
  }

  openAddModal() {
    const modal = new bootstrap.Modal(document.getElementById('addApplicationModal'));
    modal.show();
  }

  openAddForm() {
    this.showAddApplicationForm = true;
  }

  cancelAddApplication() {
    this.showAddApplicationForm = false;
    this.newApp = { company: '', role: '', date: '' };
  }

  addApplication() {
    if (this.newApp.company && this.newApp.role && this.newApp.date) {
      const newJob: Job = {
        id: this.jobs.length + 1,
        title: this.newApp.role,
        company: this.newApp.company,
        location: 'Unknown',
        type: 'Full Time',
        category: 'Remote',
        level: 'Entry Level',
        tags: [],
        description: '',
        postedDays: 0,
        publisher: 'linkedin'
      };
      this.jobs.push(newJob);
      this.newApp = { company: '', role: '', date: '' };
      // if we used the reminder overlay, close it
      this.showAddApplicationForm = false;
    }
  }

  saveNewApplication() {
    // reuse existing addApplication behaviour and close overlay
    this.addApplication();
  }
}
