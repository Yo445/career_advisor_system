import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule, NgStyle, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Features {
  id: string;
  company?: string;
  title?: string;
  description?: string;
  src?: string;
  source?: 'linkedin' | 'glassdoor' | 'other';
  appliedDate?: string | null;
  reminder?: string | null; // ISO date string for reminder
  appliedLink?: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  animations: [
    trigger('cardAnimation', [
      state(
        '*',
        style({
          transform: 'scale({{scale}}) translateY({{translateY}}px)',
        }),
        { params: { scale: 1, translateY: 0 } }
      ),
      transition('* => *', animate('100ms ease-out')),
    ]),
  ],
})
export class LandingComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: true }) container!: ElementRef;

    features: Features[] = [
      {
        id: 'f1',
        title: 'Smart Job Scraping',
        description:
          'Automatically fetch and update job listings from LinkedIn and Glassdoor. Filter by role, location, company, or keyword with real-time search.',
        src: 'scraping.jpg',
      },
      {
        id: 'f2',
        title: 'Application Tracker',
        description:
          'Easily track all jobs you applied to across LinkedIn, Glassdoor, and other platforms. Mark statuses like “Applied”, “Interviewing”, or “Rejected”.',
        src: 'tracker.jpg',
      },
      {
        id: 'f3',
        title: 'Interview Reminders',
        description:
          'Set reminders for interviews, follow-ups, deadlines, and application notes. Stay fully organized with scheduled notifications.',
        src: 'reminder.jpg',
      },
      {
        id: 'f4',
        title: 'Saved Jobs & Notes',
        description:
          'Save interesting jobs to view later, and attach personal notes such as recruiter names, expected salary, or follow-up tasks.',
        src: 'saved.jpg',
      },
      {
        id: 'f5',
        title: 'Company Insights',
        description:
          'View company profiles, job history, and quick links to career pages. Your assistant helps you prepare before applying.',
        src: 'company.jpg',
      },
    ];

    // Modal / editing state
    showEditModal = false;
    showDeleteModal = false;
    editingIndex: number | null = null;
    deleteIndex: number | null = null;
    editingFeature: Partial<Features> = {};

  scrollY = 0;
  cardStates: any[] = [];
  private scrollListener!: () => void;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _Router :Router) {}

    showScrollButton = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.showScrollButton = window.scrollY > 100;
    }
  }

  ngOnInit() {
    this.initializeCardStates();
  }



  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  initializeCardStates() {
    this.cardStates = this.features.map(() => ({
      scale: 1,
      translateY: 0,
      imageScale: 2,
    }));
  }




  getImageStyle(index: number) {
    const state = this.cardStates[index];
    return {
      transform: `scale(${state.imageScale})`,
    };
  }

  openEdit(index: number) {
    this.editingIndex = index;
    // shallow copy for editing
    this.editingFeature = { ...(this.features[index] || {}) };
    this.showEditModal = true;
  }

  openDeleteConfirm(index: number) {
    this.deleteIndex = index;
    this.showDeleteModal = true;
  }

  closeModals() {
    this.showEditModal = false;
    this.showDeleteModal = false;
    this.editingIndex = null;
    this.deleteIndex = null;
    this.editingFeature = {};
  }

  saveEdit() {
    if (this.editingIndex === null) return;
    const idx = this.editingIndex;
    const original = this.features[idx];
    const updated: Features = {
      ...original,
      ...this.editingFeature,
      id: original.id,
    } as Features;
    this.features[idx] = updated;
    this.closeModals();
  }

  deleteApplication() {
    if (this.deleteIndex === null) return;
    this.features.splice(this.deleteIndex, 1);
    this.closeModals();
    // re-init card states to match length
    this.initializeCardStates();
  }


  Register(){
    this._Router.navigate(['/signup'])
  }
}
