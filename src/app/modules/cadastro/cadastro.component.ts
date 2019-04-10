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

  errors = [];

  constructor(private httpClient: HttpClient) {
    this.formCadastro = new FormGroup({
      nome: new FormControl('Mario Souto', [Validators.required, Validators.minLength(10)]),
      username: new FormControl('omariosouto', [Validators.required, Validators.maxLength(20)]),
      senha: new FormControl('123456', [Validators.required]),
      // https://regex101.com/r/zI2ezO/4/
      telefone: new FormControl('988887777', [Validators.required, Validators.pattern(/^\d{4,7}-?\d{4}$/)]),
      avatar: new FormControl('https://avatars0.githubusercontent.com/u/13791385?s=460&v=4', [Validators.required], this.validaImagem),
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
          const isImageValid = respostaDoServer.headers
            .get('content-type')
            .includes('image');

          return isImageValid ? null : { isImagemInvalid: true };
        }),
        catchError((err) => {
          console.log(err);
          return [{ isImagemInvalid: true }];
        })
      );
  }

  marcandoControlsComoTouched() {
    Object.keys(this.formCadastro.controls).forEach((controlName) => {
      this.formCadastro.get(controlName).markAsTouched({ onlySelf: true });
    });
  }

  handleCadastro() {
    // 1 - Atualizar o handleCadastro
    this.marcandoControlsComoTouched();
    if (this.formCadastro.valid) {
      const usuarioParaAPIDTO = {
        name: this.formCadastro.value.nome,
        username: this.formCadastro.value.username,
        avatar: this.formCadastro.value.avatar,
        phone: this.formCadastro.value.telefone,
        password: this.formCadastro.value.senha,
      };

      this.httpClient.post('http://localhost:3200/users', usuarioParaAPIDTO)
        .subscribe(
          (respostaDoServer) => { // sucesso
            console.log('Cadastrou o usuário', respostaDoServer);
          },
          (erro) => {
            this.errors = erro.error.body;
            // []


            // 2 - Criar uma área emabaixo do form, mostrando os erros que rolaram
          }
        );

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
