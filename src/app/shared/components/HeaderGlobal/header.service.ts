import { Injectable, EventEmitter } from "@angular/core";
@Injectable({ providedIn: 'root'})
export class HeaderService {
  valorDoFiltro = new EventEmitter<string>();
  constructor() { this.atualizadorDoFiltro('') }
  atualizadorDoFiltro(novoValor: string) {
    this.valorDoFiltro.emit(novoValor);
  }
}
