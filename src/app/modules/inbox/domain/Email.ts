export class Email {
  para: string;
  assunto: string;
  conteudo: string;
  dataDeCriacao: string;

  constructor(para: string, assunto: string, conteudo: string, dataDeCriacao: string) {
    this.para = para;
    this.assunto = assunto;
    this.conteudo = conteudo;
    this.dataDeCriacao = dataDeCriacao;
  }
}
