import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPreviewContainerComponent } from './events-preview-container.component';

describe('EventsPreviewContainerComponent', () => {
  let component: EventsPreviewContainerComponent;
  let fixture: ComponentFixture<EventsPreviewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsPreviewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPreviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
