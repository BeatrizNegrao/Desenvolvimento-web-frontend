import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-apolice',
  imports: [FormsModule],
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  nomeSegurado = "";
  sexo = "";
  idade = 0;
  valor = 0;

  calcular(){
    if(this.sexo == "M" && this.idade <= 25){
      return this.valor * 0.15
    }

    if(this.sexo == "M" && this.idade > 25){
      return this.valor * 0.10
    }

    else{
      return this.valor * 0.08
    }
  }
}
