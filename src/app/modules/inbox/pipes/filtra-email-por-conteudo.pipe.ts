import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filtraEmailPorConteudo',
  pure: true
})
export class FiltraEmailPorConteudoPipe implements PipeTransform {
  transform(emails: Array<any>, textoDoCampo?: string): any {
    const textoDoCampoLowerCase = textoDoCampo.toLowerCase();

    return emails.filter((email) => {
      const conteudoEmailLowerCase = email.conteudo.toLowerCase();
      return conteudoEmailLowerCase.includes(textoDoCampoLowerCase);
    });
  }
}
