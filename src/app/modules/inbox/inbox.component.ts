import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from './services/email.service';

@Component({
  selector: 'page-inbox',
  templateUrl: './inbox.component.html',
})
export class InboxComponent {
  title = 'Cmail';

  emails = [
    {
      email: 'contato@x.com',
      assunto: 'Sei la 1',
      conteudo: 'alo alo w brazil'
    },
    {
      email: 'contato@x.com',
      assunto: 'Sei la 2',
      conteudo: 'vai alguma coisa'
    }
  ];

  novoEmail = {
    email: 'eu@cmail.com',
    assunto: 'Email muito louco',
    conteudo: 'lorem ipsum x'
  };

  isNewEmailFormActive = false;

  constructor(
      private emailService: EmailService
  ) {}

  toggleNewEmailFormActive() {
    this.isNewEmailFormActive = !this.isNewEmailFormActive;
  }

  handleNewEmailFormSubmit(formNovoEmail: NgForm) {
    console.log(this.novoEmail, formNovoEmail.valid);
    // fazer o push no array de emails
    // this.emails.push(Object.assign({}, this.novoEmail));
    if (formNovoEmail.valid) {

      this.emailService.send({
        to: this.novoEmail.email,
        subject: this.novoEmail.assunto,
        content: this.novoEmail.conteudo
      })
      .subscribe(
        (respostaDoServer) => {
          this.toggleNewEmailFormActive();
        }
      );


      // Antes do push
        // POST para: http://localhost:3200/emails
          // to, subject, content
          // lembrar de mandar o token para o servidor [header authorization]

      this.emails.push({
        ...this.novoEmail
      });
      this.novoEmail = {
        email: '',
        assunto: '',
        conteudo: ''
      };
      formNovoEmail.resetForm();
    }
    return false;
  }
}
