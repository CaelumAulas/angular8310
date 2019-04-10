import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmailFormFieldComponent } from './cmail-form-field.component';
import { CmailFormInputDirective } from './cmail-form-input.directive';


@NgModule({
  declarations: [
    CmailFormFieldComponent,
    CmailFormInputDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CmailFormFieldComponent,
    CmailFormInputDirective
  ]
})
export class CmailFormFieldModule {}
