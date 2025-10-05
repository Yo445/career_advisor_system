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
    { path: 'jobs-feed', label: 'Explore Path', icon: 'fa-solid fa-certificate' },
    { path: 'applications', label: 'Applications', icon: 'fa-solid fa-book' },
    { path: 'mock-interview', label: 'matched Jobs', icon: 'fa-solid fa-chalkboard-user' },
  ];

  constructor(private router: Router) {}

}

