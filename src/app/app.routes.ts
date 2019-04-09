import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/login/login-page.component';
import { InboxComponent } from './modules/inbox/inbox.component';

const rotas: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'inbox', component: InboxComponent }
];
export const roteamentoDaNossaAppzinha = RouterModule.forRoot(rotas)


