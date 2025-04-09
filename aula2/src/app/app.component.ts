import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { ListaVeiculosComponent } from './lista-veiculos/lista-veiculos.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DestaqueComponent, ListaVeiculosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula2';
}
