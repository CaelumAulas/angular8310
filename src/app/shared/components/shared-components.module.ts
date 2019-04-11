import { NgModule } from '@angular/core';
import { HeaderGlobalComponent } from './HeaderGlobal/header-global.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HeaderGlobalComponent
    // Componentes globais vao aqui...
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderGlobalComponent
  ]
})
export class SharedComponentsModule {}
