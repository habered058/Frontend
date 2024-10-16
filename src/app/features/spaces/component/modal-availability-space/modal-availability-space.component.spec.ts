import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAvailabilitySpaceComponent } from './modal-availability-space.component';

describe('ModalAvailabilitySpaceComponent', () => {
  let component: ModalAvailabilitySpaceComponent;
  let fixture: ComponentFixture<ModalAvailabilitySpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAvailabilitySpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalAvailabilitySpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
