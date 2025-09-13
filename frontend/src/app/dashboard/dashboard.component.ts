import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { NavBottomComponent } from "./components/nav-bottom/nav-bottom.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavBottomComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent { }
