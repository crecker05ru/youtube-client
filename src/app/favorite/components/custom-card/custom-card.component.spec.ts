import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardComponent } from './custom-card.component';

describe('CustomCardComponent', () => {
  let component: CustomCardComponent;
  let fixture: ComponentFixture<CustomCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomCardComponent],
    });
    fixture = TestBed.createComponent(CustomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
