import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnaDashboardComponent } from './qna-dashboard.component';

describe('QnaDashboardComponent', () => {
  let component: QnaDashboardComponent;
  let fixture: ComponentFixture<QnaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QnaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
