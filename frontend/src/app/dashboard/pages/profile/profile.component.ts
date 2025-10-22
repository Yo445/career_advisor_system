import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavBottomComponent } from '../../components/nav-bottom/nav-bottom.component';



interface UserData {
  firstName: string;
  middleName: string;
  lastName: string;
  birthdate: { day: string, month: string, year: string };
  gender: string;
  maritalStatus: string;
  militaryStatus: string;
  country: string;
  city: string;
  area: string;
  postalCode: string;
  mobileNumber: string;
  alternativeNumber: string;
}
@Component({
  selector: 'app-profile',
  templateUrl:'./profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [CommonModule
    ,FormsModule]
})

export class ProfileComponent {
  userData: UserData = {
    firstName: '',
    middleName: '',
    lastName: '',
    birthdate: { day: '', month: '', year: '' },
    gender: '',
    maritalStatus: '',
    militaryStatus: '',
    country: '',
    city: '',
    area: '',
    postalCode: '',
    mobileNumber: '',
    alternativeNumber: ''

};

  countryOptions = ['Select Your Country', 'United States', 'Canada', 'Other Country'];
  cityOptions = ['Select Your City', 'New York', 'Los Angeles', 'Toronto', 'Montreal'];
  areaOptions = ['Select Your Area', 'Downtown', 'Uptown', 'Suburb'];

dayOptions = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0')); // 01 to 31
  monthOptions = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '07', name: 'june' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' }


  ];
  yearOptions: string[] = []; // Will be populated in ngOnInit

  constructor() {
    this.populateYearOptions();
  }

  populateYearOptions() {
    const currentYear = new Date().getFullYear();
    // Populate years backward from the current year (e.g., 1930 to current year)
    for (let year = currentYear; year >= 1930; year--) {
      this.yearOptions.push(String(year));
    }
  }

// Helper arrays for dropdowns (you'd populate these properly)
  militaryStatusOptions = ['Select...', 'Exempted', 'Served', 'Pending'];



  onSave() {
    console.log('Saving changes:', this.userData);
    // Here you would typically call an Angular Service to send data to a backend API
    alert('Changes saved!');
  }

  profilePhotoUrl: string | ArrayBuffer | null = null; // Stores the URL for display

  @ViewChild('fileInput') fileInputRef!: ElementRef;

  // Method to handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      // Optional: Check file type and size
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        alert('Only .jpg, .png, or .gif files are allowed.');
        input.value = ''; // Clear the input
        return;
      }
      if (file.size > maxSize) {
        alert('File size exceeds 5MB.');
        input.value = ''; // Clear the input
        return;
      }

      // Read the file as a Data URL for preview
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profilePhotoUrl = reader.result; // Set the URL for image display
      };
      reader.readAsDataURL(file);

      // In a real application, you would typically upload 'file' to a backend service here.
      console.log('File selected for upload:', file.name);
    }
  }

  // Helper to trigger the hidden file input
  triggerFileInput(): void {
    this.fileInputRef.nativeElement.click();
  }
}
