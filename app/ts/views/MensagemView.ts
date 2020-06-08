class MensagemView {

  private elemento: Element;

  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }

  update(model: string) {
    this.elemento.innerHTML = this.template(model);
  }

  template(model: string) {
    return `<p class="alert alert-info">${model}</p>`;
  }
}