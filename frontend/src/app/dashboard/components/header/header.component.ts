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
    { path: 'jobs-feed', label: 'Explore Path', icon: 'fas fa-compass' },
    { path: 'applications', label: 'Applications', icon: 'fas fa-file-alt' },
    { path: 'mock-interview', label: 'Mock Interview', icon: 'fas fa-microphone' },
    { path: 'market-trends', label: 'Market Trends', icon: 'fas fa-chart-line' }
  ];

  constructor(private router: Router) {}

}

