import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsFeedComponent } from './dashboard/pages/jobs-feed/jobs-feed.component';
import { JobApplicationsComponent } from './dashboard/pages/job-applications/job-applications.component';
import { MockInterviewComponent } from './dashboard/pages/mock-interview/mock-interview.component';
import { MarketTrendsComponent } from './dashboard/pages/market-trends/market-trends.component';
import { ProfileComponent } from './dashboard/pages/profile/profile.component';
import { GeneralInfoComponent } from './dashboard/pages/profile/sections/general-info/general-info.component';
import { ExperinceComponent } from './dashboard/pages/profile/sections/experince/experince.component';
import { EducationComponent } from './dashboard/pages/profile/sections/education/education.component';
import { SkillsComponent } from './dashboard/pages/profile/sections/skills/skills.component';
import { CvUploadComponent } from './dashboard/pages/profile/sections/cv-upload/cv-upload.component';
import { CvAnalyzerComponent } from './dashboard/pages/profile/sections/cv-analyzer/cv-analyzer.component';
import { mock } from 'node:test';

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
    path: 'MockInterview',
    component:MockInterviewComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'jobs-feed', pathMatch: 'full' },
      { path: 'jobs-feed', component: JobsFeedComponent },
      { path: 'applications', component: JobApplicationsComponent },
      { path: 'mock-interview', component: MockInterviewComponent },
      { path: 'market-trends', component: MarketTrendsComponent },
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
          {
            path: 'cv-analyzer',
            component: CvAnalyzerComponent,
          },
        ],
      },
    ],
  },

  /* for 404 error */
  { path: '**', redirectTo: '' },
];
