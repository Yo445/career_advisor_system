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
      path: 'applications-list',
      icon: 'fa-solid fa-cube',
      label: 'Applications',
      title: 'Applications'
    },
    {
      path: 'remider',
      icon: 'fa-solid fa-alarm-clock',
      label: 'Reminders',
      title: 'Reminders'
    },
    {
      path: 'analytics',
      icon: 'fa-solid fa-chart-simple',
      label: 'Analytics',
      title: 'Analytics'
    },
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
