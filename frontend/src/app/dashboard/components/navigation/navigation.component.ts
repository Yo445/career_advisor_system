import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';interface NavigationItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  imports: [CommonModule, RouterModule],
})
export class NavigationComponent  {

    navigationItems: NavigationItem[] = [
    { path: '/explore-path', label: 'Explore Path', icon: 'fas fa-compass' },
    { path: '/applications', label: 'Applications', icon: 'fas fa-file-alt' },
    { path: '/mock-interview', label: 'Mock Interview', icon: 'fas fa-microphone' },
    { path: '/market-trends', label: 'Market Trends', icon: 'fas fa-chart-line' }
  ];

  constructor(private router: Router) {}

}
