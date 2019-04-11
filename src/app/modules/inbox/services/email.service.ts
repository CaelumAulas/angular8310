import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Email } from '../domain/Email';
import { map } from 'rxjs/operators';


interface EmailFromServer {
  to: string;
  subject: string;
  content: string;
}

// ... Vocês no comando...
@Injectable()// Para o angular conseguir injetar coisas aqui
export class EmailService {
    constructor(
      private httpClient: HttpClient,
    ) {}

    headers = {
      authorization: localStorage.getItem('TOKEN')
    };

    getInboxEmails(): Observable<Email[]> {
      return this.httpClient.get(environment.emailAPI, {
        headers: this.headers
      })
      .pipe(
        map((emails: Array<any>) => {
          const arrayOfEmails = emails
            .map( (emailFromServer: EmailFromServer) => {
              return new Email(
                  emailFromServer.to,
                  emailFromServer.subject,
                  emailFromServer.content);
            });
          return arrayOfEmails;
        })
      );
    }

    send({ to, subject, content }: EmailFromServer): Observable<Email> {
      return this.httpClient.post(environment.emailAPI, { to, subject, content }, {
        headers: this.headers
      })
      .pipe(
        map((emailDoServidor: EmailFromServer) => {
          return new Email(
              emailDoServidor.to,
              emailDoServidor.subject,
              emailDoServidor.content
            );
        })
      );
    }
}
