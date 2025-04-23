import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilho1Component } from './tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-filho2/tela-filho2.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ProdutoComponent } from './produto/produto.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'produto', component: ProdutoComponent },
    { path: 'produtoDetalhe/:id', component: ProdutoDetalheComponent },
    { path: 'sobre', component: SobreComponent },
    {
        path: 'tela-pai', component: TelaPaiComponent,
        children: [
            { path: 'tela-filho1', component: TelaFilho1Component }, 
            { path: 'tela-filho2', component: TelaFilho2Component }
        ]
    },
    { path: '**', component: PaginaNaoEncontradaComponent }

];
