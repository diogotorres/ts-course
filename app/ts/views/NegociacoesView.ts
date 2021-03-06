class NegociacoesView {
  
  private elemento: Element;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: Negociacoes): void {
    this.elemento.innerHTML = this.template(model);
  }

  template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
          </tr>
      </thead>
      
      <tbody>
        ${model.toArray().map(negociacao =>
          `
            <tr>
              <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
              <td>${negociacao.qtde}</td>
              <td>${negociacao.valor}</td>
              <td>${negociacao.volume}</td>
            </tr>
          `).join('')}
      </tbody>
      
      <tfoot>
      </tfoot>
  </table>
    `;
  }
}