import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Vehicle } from './../vehicle';

@Component({
  selector: 'app-vehicle-display',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './vehicle-display.component.html',
  styleUrl: './vehicle-display.component.css'
})
export class VehicleDisplayComponent {
  @Input() vehicle: Vehicle = new Vehicle(0, "", "", "", 0);
  @Output() editItemEvent = new EventEmitter();
  @Output() removeItemEvent = new EventEmitter();

}
