import { Comida } from './Comida';

export class ItemCarrinho {
  comida: Comida;
  quantidade: number = 1;

  constructor(comida: Comida) {
    this.comida = comida;
  }

  getPreco(): number {
    return this.comida.preco * this.quantidade;
  }
}
