import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  saved?: boolean;
  applyLink?: string;
}

@Component({
  selector: 'app-jobs-feed',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  searchQuery: string = '';
  selectedLevel: string = '';
  selectedCountry: string = '';
  // detail overlay state
  selectedJob: Job | null = null;
  showJobDetail = false;

  get filteredJobs(): Job[] {
    return this.jobs.filter(job => {
      const q = this.searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === '' ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.tags.some(t => t.toLowerCase().includes(q));

      const matchesLevel = this.selectedLevel === '' || job.level === this.selectedLevel;
      const matchesCountry = this.selectedCountry === '' || job.location.toLowerCase().includes(this.selectedCountry.toLowerCase());

      return matchesSearch && matchesLevel && matchesCountry;
    });
  }

  openJobDetail(job: Job) {
    this.selectedJob = { ...job };
    this.showJobDetail = true;
  }

  openExternal(job: Job) {
    if (!job) return;
    // if explicit apply link exists, open it
    if (job.applyLink) {
      window.open(job.applyLink, '_blank');
      return;
    }
    const query = encodeURIComponent(`${job.title} ${job.company}`);
    if (job.publisher === 'linkedin') {
      const url = `https://www.linkedin.com/jobs/search/?keywords=${query}`;
      window.open(url, '_blank');
      return;
    }
    if (job.publisher === 'glassdoor') {
      const url = `https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${query}`;
      window.open(url, '_blank');
      return;
    }
    // fallback: open Google jobs search
    const url = `https://www.google.com/search?q=${query}+jobs`;
    window.open(url, '_blank');
  }

  closeJobDetail() {
    this.showJobDetail = false;
    this.selectedJob = null;
  }

  toggleSave(job: Job | null) {
    if (!job) return;
    const idx = this.jobs.findIndex(j => j.id === job.id);
    if (idx === -1) return;
    this.jobs[idx].saved = !this.jobs[idx].saved;
    // update selectedJob to reflect change
    if (this.selectedJob && this.selectedJob.id === job.id) {
      this.selectedJob.saved = this.jobs[idx].saved;
    }
  }

  applyToJob(job: Job | null) {
    if (!job) return;
    const idx = this.jobs.findIndex(j => j.id === job.id);
    if (idx === -1) return;
    // mock apply action: open link if present, otherwise flag applied (console)
    if (this.jobs[idx].applyLink) {
      window.open(this.jobs[idx].applyLink, '_blank');
    } else {
      console.log('Applied to:', this.jobs[idx]);
      this.jobs[idx].postedDays = 0; // simple mock behaviour
    }
    this.closeJobDetail();
  }

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
      id: 99,
      title: 'Full Stack Developer',
      company: 'MockCo',
      location: 'Remote',
      type: 'Full Time',
      category: 'Remote',
      level: 'Mid Level',
      tags: ['Node.js','Angular','AWS'],
      description: 'This is a mock listing used for demoing search, filters and details.',
      postedDays: 1,
      publisher: 'linkedin',
      saved: false,
      applyLink: 'https://example.com/mock-job'
    },
    {
      id: 2,
      title: 'Wordpress Developer',
      company: 'Confidential',
      location: 'Cairo, Egypt',
      type: 'Full Time',
      category: 'Remote',
      level: 'Entry Level',
      tags: ['Entry Level', '0-3 Yrs of Exp', 'WordPress', 'CSS', 'HTML', 'IT/Software Development', 'Engineering', 'Telecom/Technology'],
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
      level: 'Entry Level',
      tags: ['Entry Level', '0-3 Yrs of Exp', 'WordPress', 'CSS', 'HTML', 'IT/Software Development', 'Engineering', 'Telecom/Technology'],
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
      publisher: 'glassdoor'
    }
  ];
}
