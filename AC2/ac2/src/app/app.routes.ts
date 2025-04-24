import { Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilho1Component } from './tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-filho2/tela-filho2.component';
import { SistemaInscricaoComponent } from './sistema-inscricao/sistema-inscricao.component';
import { ListaParticipantesComponent } from './lista-participantes/lista-participantes.component';

export const routes: Routes = [
    { path: '', redirectTo: 'sistema-inscricao', pathMatch: 'full' },
    { path: 'sistema-inscricao', component: SistemaInscricaoComponent },
    { path: 'lista-participantes', component: ListaParticipantesComponent },
    {
        path: 'tela-pai', component: TelaPaiComponent,
        children: [
            { path: 'tela-filho1', component: TelaFilho1Component }, 
            { path: 'tela-filho2', component: TelaFilho2Component }
        ]
    },
    { path: '**', component: PaginaNaoEncontradaComponent }

];
