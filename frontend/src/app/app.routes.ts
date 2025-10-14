import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { JobsComponent } from './dashboard/pages/jobs/jobs.component';
import { JobApplicationsComponent } from './dashboard/pages/job-applications/job-applications.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/pages/profile/profile.component';
import { ReminderComponent } from './dashboard/pages/reminder/reminder.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  /* Dashboard  */
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'jobs', pathMatch: 'full' },
      { path: 'jobs', component: JobsComponent },
      { path: 'applications', component: JobApplicationsComponent },
      { path: 'reminders', component: ReminderComponent },
      { path: 'profile', component: ProfileComponent},
    ],
  },


  /* for 404 error */
  { path: '**', redirectTo: '' },
];
