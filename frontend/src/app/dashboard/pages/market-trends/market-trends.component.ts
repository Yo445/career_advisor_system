import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-market-trends',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './market-trends.component.html',
  styleUrl: './market-trends.component.css'
})
export class MarketTrendsComponent implements OnInit {

  // Filtering options
  regions: string[] = ['All', 'North America', 'Europe', 'Asia', 'Middle East'];
  experienceLevels: string[] = ['All', 'Entry Level', 'Mid-Senior Level', 'Director', 'Executive'];
  jobTypes: string[] = ['All', 'Full-time', 'Part-time', 'Contract', 'Freelance'];

  // Selected filter values
  selectedRegion: string = 'All';
  selectedExperienceLevel: string = 'All';
  selectedJobType: string = 'All';

  // Original data (simulate fetching from a service)
  private originalIndustries = [
    { name: 'Technology', value: 92, region: 'North America', experience: 'Mid-Senior Level', type: 'Full-time' },
    { name: 'Healthcare', value: 78, region: 'Europe', experience: 'Entry Level', type: 'Full-time' },
    { name: 'Finance', value: 65, region: 'North America', experience: 'Mid-Senior Level', type: 'Full-time' },
    { name: 'Retail', value: 52, region: 'Asia', experience: 'Entry Level', type: 'Part-time' },
    { name: 'Education', value: 58, region: 'Europe', experience: 'Mid-Senior Level', type: 'Contract' },
    { name: 'Manufacturing', value: 42, region: 'Asia', experience: 'Entry Level', type: 'Full-time' },
    { name: 'Technology', value: 80, region: 'Middle East', experience: 'Director', type: 'Full-time' },
    { name: 'Healthcare', value: 70, region: 'Middle East', experience: 'Mid-Senior Level', type: 'Full-time' },
  ];

  private originalSalaryRoles = [
    { title: 'Software Engineer', percentage: 95, region: 'North America', experience: 'Mid-Senior Level', type: 'Full-time' },
    { title: 'Data Analyst', percentage: 80, region: 'Europe', experience: 'Entry Level', type: 'Full-time' },
    { title: 'Product Manager', percentage: 30, region: 'North America', experience: 'Director', type: 'Full-time' },
    { title: 'Marketing Specialist', percentage: 95, region: 'Asia', experience: 'Mid-Senior Level', type: 'Freelance' },
    { title: 'Sales Representative', percentage: 20, region: 'Europe', experience: 'Entry Level', type: 'Part-time' },
    { title: 'Cloud Engineer', percentage: 85, region: 'Middle East', experience: 'Mid-Senior Level', type: 'Full-time' },
  ];

  // Data to be displayed after filtering
  industries: any[] = [];
  salaryRoles: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.applyFilters(); // Apply filters on init
    console.log('Market Trends component loaded with data');
  }

  applyFilters(): void {
    // Simulate fetching and filtering data based on selected values
    this.industries = this.filterData(this.originalIndustries);
    this.salaryRoles = this.filterData(this.originalSalaryRoles);
  }

  private filterData(data: any[]): any[] {
    return data.filter(item => {
      const regionMatch = this.selectedRegion === 'All' || item.region === this.selectedRegion;
      const experienceMatch = this.selectedExperienceLevel === 'All' || item.experience === this.selectedExperienceLevel;
      const jobTypeMatch = this.selectedJobType === 'All' || item.type === this.selectedJobType;
      return regionMatch && experienceMatch && jobTypeMatch;
    });
  }

}
