import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login/login-page.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
// import { Cadastro }

const rotas: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', redirectTo: '' },
  { path: 'inbox', component: InboxComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '**', component: LoginPageComponent } // Seria o caso de ter uma page 404
];
export const roteamentoDaNossaAppzinha = RouterModule.forRoot(rotas);




