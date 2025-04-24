import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sistema-inscricao',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sistema-inscricao.component.html',
  styleUrl: './sistema-inscricao.component.css'
})
export class SistemaInscricaoComponent implements OnInit {
  form!: FormGroup;
  sistemaInscricao: any = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [0, Validators.required],
      evento: ['', Validators.required],
      modalidade: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataTermino: ['', Validators.required],
    });
  }

  enviar() {
    console.log('salvo:', this.form.value);
    this.sistemaInscricao.push(this.form.value);
    alert('Salvo com sucesso!');
  }
}
