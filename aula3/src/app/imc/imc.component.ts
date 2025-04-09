import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-imc',
  imports: [FormsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class IMCComponent {
  peso = 0;
  altura = 0;
  imc = 0;

  calcular(){
    this.imc = (this.peso/(this.altura*this.altura));
  }

  classificacao(){
    if(this.imc < 18.5){
      return "Abaixo do peso"
    }

    if(this.imc >=18.5 && this.imc <=24.5){
      return " Peso normal"
    }

    if(this.imc >=25 && this.imc <= 29.9){
      return "Sobrepeso"
    }

    if(this.imc >=30 && this.imc <= 34.9){
      return "Obesidade grau I"
    }

    if(this.imc >=35 && this.imc <= 39.9){
      return " Obesidade grau II"
    }

    else {
      return "Obesidade grau III"
    }
  }
}
