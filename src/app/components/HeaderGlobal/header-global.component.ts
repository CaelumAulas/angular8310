import { Component, Input } from "@angular/core";
@Component({
  selector: 'header-global',
  templateUrl: './header-global.component.html',
  styleUrls: [
    './header-global.component.css',
    './header-search.css',
  ]
  // Pegar o html do header, e migrar pra esse template /\
})
export class HeaderGlobalComponent {
  @Input() titulo = 'Por favor, informe um título';

  isMenuAberto = false;

  toggleMenu() {
    // mandar uma requisição pra um servidor X
    this.isMenuAberto = !this.isMenuAberto;
  }
}
