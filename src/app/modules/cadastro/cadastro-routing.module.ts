import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
const routes: Routes = [
  { path: '', component: CadastroComponent },
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CadastroRoutingModule {}
