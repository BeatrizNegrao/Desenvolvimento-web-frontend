import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1 = 0;
  num2 = 0;
  soma = 0;
  subtracao = 0;
  multiplicacao = 0;
  divisao = 0;

  calcular(){
    this.soma = (this.num1 + this.num2);
    this.subtracao = (this.num1 - this.num2);
    this.multiplicacao = (this.num1 * this.num2);
    this.divisao = (this.num1 / this.num2);
  }

}
