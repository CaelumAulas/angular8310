import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  novoUsuario = {
    nome: ''
  };

  constructor() { }
}
