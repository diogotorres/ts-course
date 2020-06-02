class NegociacaoController {

  private inputData: HTMLInputElement;
  private inputQtde: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();
  private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');

  constructor() {
    this.inputData = <HTMLInputElement>document.querySelector('#data');
    this.inputQtde = <HTMLInputElement>document.querySelector('#quantidade');
    this.inputValor = <HTMLInputElement>document.querySelector('#valor');
    this.negociacoesView.update(this.negociacoes);
  }

  adiciona(event: Event) {
    event.preventDefault();
    const negociacao = new Negociacao(
      new Date(this.inputData.value.replace(/-/g, ',')), 
      parseInt(this.inputQtde.value), 
      parseFloat(this.inputValor.value)
    );

    this.negociacoes.adiciona(negociacao);
    this.negociacoesView.update(this.negociacoes);
  }

}