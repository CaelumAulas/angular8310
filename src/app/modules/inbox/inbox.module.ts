import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { InboxComponent } from './inbox.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule, // Várias diretivas e coisas default do Angular
    FormsModule,
    HttpClientModule,
    SharedComponentsModule
  ],
  exports: [
    InboxComponent
  ],
  providers: [ // Para poder carregar uma classe SUA via injeção
    EmailService
  ]
})
export class InboxModule {}
