import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavigationItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HeaderComponent  {

    navigationItems: NavigationItem[] = [
    { path: 'jobs', label: 'Explore Path', icon: 'fa-solid fa-certificate' },
    { path: 'applications', label: 'Applications', icon: 'fa-solid fa-book' },
    { path: 'reminders', label: 'Reminders', icon: 'fa-solid fa-alarm-clock' },
    { path: 'profile', label: 'Profile', icon: 'fa-solid fa-user' },
  ];

  constructor(private router: Router) {}
  logout() {
  // Clear auth data or token
  localStorage.removeItem('authUser');
  // Navigate to login
  this.router.navigate(['/login']);
}


}

