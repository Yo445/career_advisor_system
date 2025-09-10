import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "../../components/side-bar/side-bar.component";

@Component({
  selector: 'app-profile',
  templateUrl:'./profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideBarComponent]
})
export class ProfileComponent {

  constructor() { }
  title = 'angular-profile';
  activeMenuItem = 'upload-cv';
  sidebarVisible = false;

  onMenuItemSelected(item: string) {
    this.activeMenuItem = item;
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      this.sidebarVisible = false;
    }
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  closeSidebar() {
    this.sidebarVisible = false;
  }

  getPageTitle(): string {
    switch (this.activeMenuItem) {
      case 'general-info': return 'General Information';
      case 'upload-cv': return 'Upload your CV';
      case 'experience': return 'Experience';
      case 'skills': return 'Skills';
      case 'education': return 'Education';
      default: return 'Profile';
    }
  }
}
