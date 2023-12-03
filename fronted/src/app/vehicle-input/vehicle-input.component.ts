import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { Vehicle } from './../vehicle';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vehicle-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './vehicle-input.component.html',
  styleUrl: './vehicle-input.component.css',
})
export class VehicleInputComponent {
  @ViewChild('vehicleForm') vehicleForm!: NgForm;

  @Output() newDataEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http
      .post<Vehicle>('http://localhost:8080/vehicles', this.vehicleForm.value)
      .subscribe((data) => this.newDataEvent.emit(data));
  }
}
