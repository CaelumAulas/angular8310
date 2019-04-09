import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderGlobalComponent } from './components/HeaderGlobal/header-global.component';
import { LoginPageComponent } from './modules/login/login-page.component';
import { roteamentoDaNossaAppzinha } from './app.routes';
import { InboxComponent } from './modules/inbox/inbox.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CmailFormFieldComponent } from './components/cmail-form-field/cmail-form-field.component';
import { CmailFormInputDirective } from './components/cmail-form-field/cmail-form-input.directive';

@NgModule({
  declarations: [ // Componentes, Diretivas (vamos ver dps)
    AppComponent,
    HeaderGlobalComponent,
    LoginPageComponent,
    InboxComponent,
    CadastroComponent,
    CmailFormFieldComponent,
    CmailFormInputDirective
  ],
  imports: [ // Sempre módulos com funcionalidades
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // import { HttpClientModule } from '@angular/common/http';
    roteamentoDaNossaAppzinha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
