export class Email {
  para: string;
  assunto: string;
  conteudo: string;

  constructor(para: string, assunto: string, conteudo: string) {
    this.para = para;
    this.assunto = assunto;
    this.conteudo = conteudo;
  }
}
