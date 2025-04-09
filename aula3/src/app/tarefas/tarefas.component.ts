import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Tarefa} from '../models/Tarefa';

@Component({
  selector: 'app-tarefas',
  imports: [FormsModule, CommonModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class Tarefas {
  concluida: boolean = true;
  descricao: string='';
   pessoas: Tarefa[] = [
      {id: 1, descricao: 'Fazer lição do inglês', concluida: 'Sim'},
      {id: 2, descricao: 'Estudar para prova da faculdade', concluida: 'Sim'},
      {id: 3, descricao: 'Praticar lógica', concluida: 'Não'},
      {id: 4, descricao: 'Praticar inglês', concluida: 'Não'},
      {id: 5, descricao: 'Praticar esporte', concluida: 'Sim'}
    ];
}
