import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface JobListing {
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
}

@Component({
  selector: 'app-jobs-feed',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jobs-feed.component.html',
  styleUrl: './jobs-feed.component.css'
})
export class JobsFeedComponent implements OnInit {
  searchQuery: string = '';
  selectedLevel: string = '';
  selectedCountry: string = '';

  jobListings: JobListing[] = [
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
      postedDays: 16
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
      postedDays: 2
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
      postedDays: 2
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
      postedDays: 2
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
      postedDays: 2
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
      postedDays: 2
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
      postedDays: 2
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
      postedDays: 2
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
      postedDays: 2
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
      postedDays: 2
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
      postedDays: 2
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
      postedDays: 2
    }
  ];

  filteredJobs: JobListing[] = [];

  ngOnInit() {
    this.filteredJobs = this.jobListings;
  }

  filterJobs() {
    this.filteredJobs = this.jobListings.filter(job => {
      const matchesSearch = !this.searchQuery ||
        job.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()));

      const matchesLevel = !this.selectedLevel || job.level === this.selectedLevel;

      const matchesCountry = !this.selectedCountry ||
        job.location.includes(this.selectedCountry) ||
        (this.selectedCountry === 'Remote' && job.category === 'Remote');

      return matchesSearch && matchesLevel && matchesCountry;
    });
  }
}
