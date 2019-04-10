import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { roteamentoDaNossaAppzinha } from './app.routes';
import { InboxComponent } from './modules/inbox/inbox.component';
import { LoginPageModule } from './modules/login/login-page.module';
import { AuthUserGuard } from './shared/guards/auth-user.guard';

@NgModule({
  declarations: [ // Componentes, Diretivas (vamos ver dps)
    AppComponent,
    InboxComponent,
  ],
  imports: [ // Sempre módulos com funcionalidades/pagina / Módulos de Libs
    BrowserModule,
    FormsModule,
    LoginPageModule,
    roteamentoDaNossaAppzinha
  ],
  providers: [
    AuthUserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
