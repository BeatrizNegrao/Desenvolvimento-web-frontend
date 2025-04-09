import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Pessoa} from '../models/Pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exemplo-diretivas',
  imports: [FormsModule, CommonModule],
  templateUrl: './exemplo-diretivas.component.html',
  styleUrl: './exemplo-diretivas.component.css'
})
export class ExemploDiretivasComponent {

  constructor(private route: Router) { }

  exibirTabela: boolean = true;
  nome: string = '';
  pessoas: Pessoa[] = [
    {nome: 'Lorena', id: 1, cidade: 'Sorocaba', celular: '1599166878'},
    {nome: 'Arthur', id: 2, cidade: 'Sorocaba', celular: '1599166878'},
    {nome: 'Pedro', id: 3, cidade: 'Sorocaba', celular: '1599166878'}
  ];

  abrirDetalhe(id: number) {
    this.route.navigate(['detalhe', id]);
  }
}
