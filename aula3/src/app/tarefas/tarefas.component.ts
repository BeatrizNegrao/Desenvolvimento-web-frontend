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
export class TarefasComponent {

  descricao: string = "";
  concluida: boolean = true;

  tarefas: Tarefa[] = [
    {id: 1, descricao: 'Fazer lição do inglês', concluida: true},
    {id: 2, descricao: 'Estudar para prova da faculdade', concluida: true},
    {id: 3, descricao: 'Praticar lógica', concluida: true},
    {id: 4, descricao: 'Praticar inglês', concluida: false},
    {id: 5, descricao: 'Praticar esporte', concluida: false}
  ];
   
    alterarStatus(t: Tarefa) {
      t.concluida = !t.concluida;
    }
}



  

