import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MediaSimplesComponent } from './media-simples/media-simples.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TelaPaiComponent } from './tela-pai/tela-pai.component';
import { TelaFilho1Component } from './tela-filho1/tela-filho1.component';
import { TelaFilho2Component } from './tela-filho2/tela-filho2.component';
import { CalcularJurosSimplesComponent } from './calcular-juros-simples/calcular-juros-simples.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { IMCComponent } from './imc/imc.component';
import { ExemploDiretivasComponent } from './exemplo-diretivas/exemplo-diretivas.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { AtividadeFixacaoAc2Component } from './atividade-fixacao-ac2/atividade-fixacao-ac2.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'calculadora', component: CalculadoraComponent },
    { path: 'mediaSimples', component: MediaSimplesComponent },
    { path: 'calcularJurosSimples', component: CalcularJurosSimplesComponent},
    { path: 'apolice', component: ApoliceComponent},
    { path: 'conversor', component: ConversorTemperaturaComponent},
    { path: 'imc', component: IMCComponent},
    {
        path: 'tela-pai', component: TelaPaiComponent,
        children: [
            { path: 'tela-filho1', component: TelaFilho1Component }, 
            { path: 'tela-filho2', component: TelaFilho2Component }
        ]
    },
    { path: 'exemplo-diretivas', component: ExemploDiretivasComponent },
    { path: 'tarefas', component: TarefasComponent },
    { path: 'detalhe/:id', component: ClienteDetalheComponent },
    { path: 'login', component: LoginComponent },
    { path: 'perfil/:email', component: PerfilComponent },
    {path: 'cadastro-usuario', component: CadastroUsuarioComponent},
    {path: 'cadastro-pessoa', component: CadastroPessoaComponent},
    {path: 'atividade-fixacao', component: AtividadeFixacaoAc2Component},
    { path: '**', component: PaginaNaoEncontradaComponent }
];
