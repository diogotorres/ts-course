class NegociacaoController {

  private inputData: HTMLInputElement;
  private inputQtde: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes: Negociacoes = new Negociacoes();

  constructor() {
    this.inputData = <HTMLInputElement>document.querySelector('#data');
    this.inputQtde = <HTMLInputElement>document.querySelector('#quantidade');
    this.inputValor = <HTMLInputElement>document.querySelector('#valor');
  }

  adiciona(event: Event) {
    event.preventDefault();
    const negociacao = new Negociacao(
      new Date(this.inputData.value.replace(/-/g, ',')), 
      parseInt(this.inputQtde.value), 
      parseFloat(this.inputValor.value)
    );

    this.negociacoes.adiciona(negociacao);
    
    this.negociacoes.toArray().forEach(negociacao => {
      console.log(negociacao.data);
      console.log(negociacao.qtde);
      console.log(negociacao.valor);
    });
  }

}