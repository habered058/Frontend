import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSpaceComponent } from './modal-space.component';

describe('ModalSpaceComponent', () => {
  let component: ModalSpaceComponent;
  let fixture: ComponentFixture<ModalSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
