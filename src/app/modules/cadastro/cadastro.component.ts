import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  formCadastro: FormGroup;

  constructor(private httpClient: HttpClient) {
    this.formCadastro = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(10)]),
      username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      senha: new FormControl('', [Validators.required]),
      // https://regex101.com/r/zI2ezO/4/
      telefone: new FormControl('', [Validators.required, Validators.pattern(/^\d{4,7}-?\d{4}$/)]),
      avatar: new FormControl('', [Validators.required], this.validaImagem),
    });

  }

  validaImagem = (formControl) => { // import { map, catchError } from 'rxjs/operators';
    const valorDoCampo = formControl.value;
    return this.httpClient.head(valorDoCampo, {
      observe: 'response'
    })
      .pipe(
        map((respostaDoServer) => {
          // Array => Array de outra coisa
          // Fluxo de dados => Fluxo de dados de outra coisa
          // console.log(respostaDoServer);
          return respostaDoServer.ok ? null : { isImagemInvalida: true }
        }),
        catchError((err) => {
          console.log(err);
          return [{ isImagemInvalida: true }];
        })
      );
  }

  marcandoControlsComoTouched() {
    Object.keys(this.formCadastro.controls).forEach((controlName) => {
      this.formCadastro.get(controlName).markAsTouched({ onlySelf: true });
    });
  }

  handleCadastro() {
    this.marcandoControlsComoTouched();
    if (this.formCadastro.valid) {
      alert('Pode cadastrar, sucessinhos!');
    } else {
      alert('Deu ruim :(');
    }
  }
}
// 1 - terminar de criar os campos do formulário
  // Lembrar de criar os campos no formulário (a parte do HTML)
// 2 - Fazer o código do submit



    // return fetch('https://avatars0.githubusercontent.com/u/13791385?s=460&v=4', {
    //   method: 'HEAD'
    // })
    // .then((respostaDoServer) => {
    //   const isImagemValida = respostaDoServer.headers.get('content-type').includes('image');
    //   if (isImagemValida) {
    //     return null;
    //   }
    //   return { isImagemInvalida: true };
    // })
    // .catch((err) => {
    //   return { isImagemInvalida: true };
    // });
