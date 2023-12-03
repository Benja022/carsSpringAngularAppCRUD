import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInputComponent } from './vehicle-input.component';

describe('VehicleInputComponent', () => {
  let component: VehicleInputComponent;
  let fixture: ComponentFixture<VehicleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
