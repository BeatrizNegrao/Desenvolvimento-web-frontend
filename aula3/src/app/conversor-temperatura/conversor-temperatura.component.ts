import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-conversor-temperatura',
  imports: [FormsModule],
  templateUrl: './conversor-temperatura.component.html',
  styleUrl: './conversor-temperatura.component.css'
})
export class ConversorTemperaturaComponent {
  celsius = 0;
  fahrenheit = 0;
  kelvin = 0;

  converter(){
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = (this.celsius + 273.15);
  }
}
