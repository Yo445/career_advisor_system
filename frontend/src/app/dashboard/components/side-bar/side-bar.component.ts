import { Component, Input, Output, EventEmitter } from '@angular/core';interface MenuItem {
  id: string;
  label: string;
  icon?: string;
}
@Component({
  selector: 'app-side-bar',
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Input() activeItem: string = 'upload-cv';
  @Output() menuItemSelected = new EventEmitter<string>();

  menuItems: MenuItem[] = [
    { id: 'general-info', label: 'General Info' },
    { id: 'upload-cv', label: 'Upload CV' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' }
  ];

  selectMenuItem(itemId: string) {
    this.menuItemSelected.emit(itemId);
  }
}

