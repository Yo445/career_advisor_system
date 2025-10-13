import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [HeaderComponent, RouterOutlet]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
