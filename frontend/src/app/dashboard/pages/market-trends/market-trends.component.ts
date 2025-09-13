import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-market-trends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-trends.component.html',
  styleUrl: './market-trends.component.css'
})
export class MarketTrendsComponent implements OnInit {

  // Industry data for bar charts
  industries = [
    { name: 'Technology', value: 92 },
    { name: 'Healthcare', value: 78 },
    { name: 'Finance', value: 65 },
    { name: 'Retail', value: 52 },
    { name: 'Education', value: 58 },
    { name: 'Manufacturing', value: 42 }
  ];

  // Salary data for horizontal bars
  salaryRoles = [
    { title: 'Software Engineer', percentage: 95 },
    { title: 'Data Analyst', percentage: 80 },
    { title: 'Product Manager', percentage: 30 },
    { title: 'Marketing Specialist', percentage: 95 },
    { title: 'Sales Representative', percentage: 20 }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Market Trends component loaded with data');
  }

}