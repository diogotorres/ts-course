class Negociacoes {
  
  // equivalente
  //private negociacoes: Array<Negociacao> = [];
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao);
  }

  toArray(): Negociacao[] {
    //retorna um clone do array da classe
    return [].concat(this.negociacoes);
  }
}