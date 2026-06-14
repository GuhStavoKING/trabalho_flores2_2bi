import { ItemCarrinho } from './ItemCarrinho';

export class Carrinho {
  itens: ItemCarrinho[] = [];

  getPrecoTotal(): number {
    let total = 0;
    this.itens.forEach(item => {
      total += item.getPreco();
    });
    return total;
  }
}
