export class Email {
  para: string;
  assunto: string;
  conteudo: string;
  dataDeCriacao: string;
  id: string;

  constructor(para: string, assunto: string, conteudo: string, dataDeCriacao: string, id: string) {
    this.para = para;
    this.assunto = assunto;
    this.conteudo = conteudo;
    this.dataDeCriacao = dataDeCriacao;
    this.id = id;
  }
}
