import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-participantes',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './lista-participantes.component.html',
  styleUrl: './lista-participantes.component.css'
})
export class ListaParticipantesComponent implements OnInit {

  form!: FormGroup;
  participantes: any = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [0, Validators.required],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      tipoIngresso: ['', Validators.required]
    });
  }

  salvar() {
    console.log('salvo:', this.form.value);
    this.participantes.push(this.form.value);
    alert('Salvo com sucesso!');
  }
}

