import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFeedComponent } from './jobs-feed.component';

describe('JobsFeedComponent', () => {
  let component: JobsFeedComponent;
  let fixture: ComponentFixture<JobsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsFeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
