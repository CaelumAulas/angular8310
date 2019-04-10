import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login/login-page.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { AuthUserGuard } from './shared/guards/auth-user.guard';

const rotas: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', redirectTo: '' },
  { path: 'inbox', component: InboxComponent, canActivate: [ AuthUserGuard ] },
  { path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule' },
  { path: '**', component: LoginPageComponent } // Seria o caso de ter uma page 404
];


// canActivate.forEach((guards: CanActivate) => {
//   guards.canActivate()
// })

// Modo Claudio
// Admin
// Usuario Comum


// Auth

export const roteamentoDaNossaAppzinha = RouterModule.forRoot(rotas);




