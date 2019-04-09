import { Component } from '@angular/core';

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
    email: '',
    assunto: '',
    conteudo: ''
  };

  isNewEmailFormActive = false;

  toggleNewEmailFormActive() {
    this.isNewEmailFormActive = !this.isNewEmailFormActive;
  }

  handleNewEmailFormSubmit(formNovoEmail: NgForm) {
    console.log(this.novoEmail, formNovoEmail.valid);
    // fazer o push no array de emails
    // this.emails.push(Object.assign({}, this.novoEmail));
    if (formNovoEmail.valid) {
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
