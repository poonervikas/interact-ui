import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsDashboardComponent } from './polls-dashboard.component';

describe('PollsDashboardComponent', () => {
  let component: PollsDashboardComponent;
  let fixture: ComponentFixture<PollsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
