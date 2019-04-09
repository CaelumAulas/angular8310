import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderGlobalComponent } from './components/HeaderGlobal/header-global.component';
import { LoginPageComponent } from './modules/login/login-page.component';
import { roteamentoDaNossaAppzinha } from './app.routes';
import { InboxComponent } from './modules/inbox/inbox.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { CmailFormFieldComponent } from './components/cmail-form-field/cmail-form-field.component';

@NgModule({
  declarations: [ // Componentes, Diretivas (vamos ver dps)
    AppComponent,
    HeaderGlobalComponent,
    LoginPageComponent,
    InboxComponent,
    CadastroComponent,
    CmailFormFieldComponent
  ],
  imports: [ // Sempre módulos com funcionalidades
    BrowserModule,
    FormsModule,
    roteamentoDaNossaAppzinha
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
