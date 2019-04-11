import { Component, Input } from "@angular/core";
import { HeaderService } from './header.service';
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

  constructor(private headerService: HeaderService) {
    // headerService.valorDoFiltro.subscribe((valorDoFiltro) => {
    //   console.log('Alguém atualizou o filtro da busca', valorDoFiltro);
    // });
  }

  toggleMenu() {
    // mandar uma requisição pra um servidor X
    this.isMenuAberto = !this.isMenuAberto;
  }

  handlerFilterInput(value: string) {
    this.headerService.atualizadorDoFiltro(value);
  }
}
