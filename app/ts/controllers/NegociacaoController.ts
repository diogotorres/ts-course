class NegociacaoController {

  private inputData: HTMLInputElement;
  private inputQtde: HTMLInputElement;
  private inputValor: HTMLInputElement;

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
    console.log(negociacao.qtde + 20);
  }

}