import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CmailFormFieldModule } from '../../components/cmail-form-field/cmail-form-field.module';
import { LoginPageComponent } from './login-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginUsuarioService } from './services/login-usuario.service';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule, // Várias diretivas e coisas default do Angular
    FormsModule,
    HttpClientModule,
    CmailFormFieldModule
  ],
  exports: [
    LoginPageComponent
  ],
  providers: [
    LoginUsuarioService
  ]
})
export class LoginPageModule {}
