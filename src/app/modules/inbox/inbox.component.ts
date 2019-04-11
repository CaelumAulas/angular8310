import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from './services/email.service';
import { Email } from './domain/Email';

@Component({
  selector: 'page-inbox',
  templateUrl: './inbox.component.html',
})
export class InboxComponent {
  title = 'Cmail';

  emails: Array<Email> = [];

  novoEmail = {
    para: 'eu@cmail.com',
    assunto: 'Email muito louco',
    conteudo: 'lorem ipsum x'
  };

  isNewEmailFormActive = false;

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.emailService.getInboxEmails()
      .subscribe((emails: Array<Email>) => {
        this.emails = emails;
      });
  }



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
        to: this.novoEmail.para,
        subject: this.novoEmail.assunto,
        content: this.novoEmail.conteudo
      })
      .subscribe(
        (email: Email) => {
          this.emails.push(email);
          this.novoEmail = { para: '', assunto: '', conteudo: '' };
          formNovoEmail.resetForm();
          this.toggleNewEmailFormActive();
        }
      );


    }
    return false;
  }
}
