import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// ... Vocês no comando...
@Injectable()// Para o angular conseguir injetar coisas aqui
export class EmailService {
    constructor(
      private httpClient: HttpClient,
    ) {}

    send({ to, subject, content }) {
      return this.httpClient.post('http://localhost:3200/emails', {
        to,
        subject,
        content
      }, {
        headers: {
          // Token Service
          authorization: localStorage.getItem('TOKEN')
        }
      })
    }
}
