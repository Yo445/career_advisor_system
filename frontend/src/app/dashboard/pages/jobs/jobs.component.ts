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
