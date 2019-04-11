import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
// Configurar o roteamento
// Redirects
// Fazer o lazy load
// Checar quem ta autenticado
@Injectable()
export class AuthUserGuard implements CanActivate {
  constructor(private roteamento: Router) {}
  canActivate() {
    // mandar um request pro backend /login/authtoken
    // se for valido...
    const hasToken = localStorage.getItem('TOKEN');
    const jwt = new JwtHelperService();
    // console.log(jwt.decodeToken(hasToken), hasToken);

    if (!hasToken) {
      this.roteamento.navigate(['/login']);
      return false;
    }
    return true;
  }
}
