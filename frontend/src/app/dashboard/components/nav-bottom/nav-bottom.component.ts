import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface NavItem {
  path: string;
  icon: string;
  label: string;
  title: string;
}

@Component({
  selector: 'app-nav-bottom',
  templateUrl: './nav-bottom.component.html',
  styleUrls: ['./nav-bottom.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class NavBottomComponent {
  navItems: NavItem[] = [
    {
      path: 'general-info',
      icon: 'fas fa-user',
      label: 'General Info',
      title: 'General Information'
    },
    {
      path: 'cv-upload',
      icon: 'fas fa-upload',
      label: 'Upload CV',
      title: 'Upload your CV'
    },
    {
      path: 'experience',
      icon: 'fas fa-briefcase',
      label: 'Experience',
      title: 'Experience'
    },
    {
      path: 'skill',
      icon: 'fas fa-cogs',
      label: 'Skills',
      title: 'Skills'
    },
    {
      path: 'education',
      icon: 'fas fa-graduation-cap',
      label: 'Education',
      title: 'Education'
    },
    {
      path: 'cv-analyzer',
      icon: 'fas fa-chart-line',
      label: 'CV Analyzer',
      title: 'CV Analyzer'
    }
  ];

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.isActive(path, {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }

  getPageTitle(path: string): string {
    const item = this.navItems.find(item => item.path === path);
    return item ? item.title : 'Profile';
  }
}
