import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBottomComponent } from '../../components/nav-bottom/nav-bottom.component';

@Component({
  selector: 'app-profile',
  templateUrl:'./profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavBottomComponent]
})
export class ProfileComponent {

}
