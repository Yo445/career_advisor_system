import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { JobsFeedComponent } from './candidate-dashboard/pages/jobs-feed/jobs-feed.component';
import { JobApplicationsComponent } from './candidate-dashboard/pages/job-applications/job-applications.component';
import { GeneralInfoComponent } from './candidate-dashboard/pages/profile/sections/general-info/general-info.component';
import { ExperinceComponent } from './candidate-dashboard/pages/profile/sections/experince/experince.component';
import { EducationComponent } from './candidate-dashboard/pages/profile/sections/education/education.component';
import { SkillsComponent } from './candidate-dashboard/pages/profile/sections/skills/skills.component';
import { CvUploadComponent } from './candidate-dashboard/pages/profile/sections/cv-upload/cv-upload.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { ProfileComponent } from './candidate-dashboard/pages/profile/profile.component';
import { EmployerDashboardComponent } from './employer-dashboard/employer-dashboard.component';

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

  /* Candidate Dashboard  */
  {
    path: 'dashboard/candidate',
    component: CandidateDashboardComponent,
    children: [
      { path: '', redirectTo: 'jobs-feed', pathMatch: 'full' },
      { path: 'jobs-feed', component: JobsFeedComponent },
      { path: 'applications', component: JobApplicationsComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: '',
            redirectTo: 'general-info',
            pathMatch: 'full',
          },
          {
            path: 'general-info',
            component: GeneralInfoComponent,
          },
          {
            path: 'experience',
            component: ExperinceComponent,
          },
          {
            path: 'education',
            component: EducationComponent,
          },
          {
            path: 'skill',
            component: SkillsComponent,
          },
          {
            path: 'cv-upload',
            component: CvUploadComponent,
          },
        ],
      },
    ],
  },

  /* Employer Dashboard  */
  {
    path: 'dashboard/empoloyer',
    component: EmployerDashboardComponent,
    children: [
      { path: '', redirectTo: 'jobs-feed', pathMatch: 'full' },
      { path: 'jobs-feed', component: JobsFeedComponent },
      { path: 'applications', component: JobApplicationsComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {
            path: '',
            redirectTo: 'general-info',
            pathMatch: 'full',
          },
          {
            path: 'general-info',
            component: GeneralInfoComponent,
          },
          {
            path: 'experience',
            component: ExperinceComponent,
          },
          {
            path: 'education',
            component: EducationComponent,
          },
          {
            path: 'skill',
            component: SkillsComponent,
          },
          {
            path: 'cv-upload',
            component: CvUploadComponent,
          },
        ],
      },
    ],
  },

  /* for 404 error */
  { path: '**', redirectTo: '' },
];
