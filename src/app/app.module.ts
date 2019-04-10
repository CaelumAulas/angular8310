import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './modules/login/login-page.component';
import { roteamentoDaNossaAppzinha } from './app.routes';
import { InboxComponent } from './modules/inbox/inbox.component';

@NgModule({
  declarations: [ // Componentes, Diretivas (vamos ver dps)
    AppComponent,
    LoginPageComponent,
    InboxComponent,
  ],
  imports: [ // Sempre módulos com funcionalidades/pagina / Módulos de Libs
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
