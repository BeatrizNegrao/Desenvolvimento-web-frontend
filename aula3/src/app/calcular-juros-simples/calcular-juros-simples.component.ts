import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calcular-juros-simples',
  imports: [FormsModule],
  templateUrl: './calcular-juros-simples.component.html',
  styleUrl: './calcular-juros-simples.component.css'
})
export class CalcularJurosSimplesComponent {
  capital: number = 0;
  taxaJuros: number = 0;
  juros: number = 0;
  tempo: number = 0;
  montante: number = 0;

  calcular() {
    // converter taxa de juros para decimal
    const taxaDecimal = this.taxaJuros / 100;

    // calcular juros simples
    this.juros = this.capital * this.taxaJuros * this.tempo;

    // calcular montante final
    this.montante = this.capital + this.juros;
  }
  
}
