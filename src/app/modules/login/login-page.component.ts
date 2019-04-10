import { Component } from '@angular/core';
import { LoginUsuarioService } from './services/login-usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [
    './login-page.component.css'
  ]
})
export class LoginPageComponent {
  title = 'Página de login';
  dadosLogin = { email: 'omariosouto@cmail.com.br', senha: '123' }

  constructor(
      private loginService: LoginUsuarioService,
      private router: Router
      ) {}

  handleLoginSubmit(formLogin) {
    if (formLogin.valid) {
      const formLoginParaAPIDTO = {
        email: this.dadosLogin.email,
        password: this.dadosLogin.senha
      };
      this.loginService.logar(formLoginParaAPIDTO)
        .subscribe(
          () => {
            this.router.navigate(['inbox']);
          }
        )
    }
  }

}
