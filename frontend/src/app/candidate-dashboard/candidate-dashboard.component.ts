import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { RouterOutlet } from "../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.css'],
  imports: [HeaderComponent, RouterOutlet]
})
export class CandidateDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
