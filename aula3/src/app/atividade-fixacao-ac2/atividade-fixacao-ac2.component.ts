import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-atividade-fixacao-ac2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './atividade-fixacao-ac2.component.html',
  styleUrl: './atividade-fixacao-ac2.component.css'
})
export class AtividadeFixacaoAc2Component implements OnInit {
  form! : FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0, Validators.required),
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
      senhaConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])
    });
    
  }

  salvar(){
    console.log('Usuário salvo:', this.form.value);
    alert('Salvo com sucesso!');
  }
}
