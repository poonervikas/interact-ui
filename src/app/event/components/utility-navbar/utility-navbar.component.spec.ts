import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityNavbarComponent } from './utility-navbar.component';

describe('UtilityNavbarComponent', () => {
  let component: UtilityNavbarComponent;
  let fixture: ComponentFixture<UtilityNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
