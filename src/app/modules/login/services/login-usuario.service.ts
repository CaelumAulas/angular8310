import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class LoginUsuarioService {
  constructor(private httpClient: HttpClient) {}

  logar(dadosDoLogin: { email: string, password: string }) {
    console.log('Dando certo!', dadosDoLogin);
    return this.httpClient.post('http://localhost:3200/login', dadosDoLogin)
      .pipe(
        map((respostaDoServer: any) => {
          localStorage.setItem('TOKEN', respostaDoServer.token);

          return respostaDoServer;
        })
      )
  }
}
