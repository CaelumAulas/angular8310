import { NgModule } from '@angular/core';
import { HeaderGlobalComponent } from './HeaderGlobal/header-global.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    HeaderGlobalComponent
    // Componentes globais vao aqui...
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderGlobalComponent
  ]
})
export class SharedComponentsModule {}
