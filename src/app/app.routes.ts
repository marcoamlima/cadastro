import { Routes } from '@angular/router';
import { CadastroComponent } from './features/cadastro/cadastro/cadastro.component';
import { DadosComponent } from './features/dados/dados/dados.component';

export const routes: Routes = [
    { path: '', component: CadastroComponent },
    { path: 'cadastro', component: CadastroComponent }, 
    { path: 'dados', component: DadosComponent },
    { path: '**', redirectTo: '' }
];
