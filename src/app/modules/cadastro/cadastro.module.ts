import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CmailFormFieldModule } from '../../components/cmail-form-field/cmail-form-field.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [
    CadastroComponent,
  ],
  imports: [
    CommonModule, // Várias diretivas e coisas default do Angular
    SharedComponentsModule,
    ReactiveFormsModule,
    CmailFormFieldModule,
    CadastroRoutingModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule {}
