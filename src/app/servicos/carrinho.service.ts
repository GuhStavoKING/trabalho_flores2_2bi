import { Injectable } from '@angular/core';
import { ItemCarrinho } from '../modelos/ItemCarrinho';
import { Carrinho } from '../modelos/Carrinho';
import { Comida } from '../modelos/Comida';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private carrinho: Carrinho = new Carrinho();

  adicionar(comida: Comida): void {
    let item = this.carrinho.itens.find(i => i.comida.id === comida.id);
    if (item) {
      this.alterarQuantidade(comida.id, item.quantidade + 1);
      return;
    }
    this.carrinho.itens.push(new ItemCarrinho(comida));
  }

  remover(idComida: number): void {
    this.carrinho.itens = this.carrinho.itens.filter(item => item.comida.id != idComida);
  }

  alterarQuantidade(idComida: number, quantidade: number): void {
    let item = this.carrinho.itens.find(i => i.comida.id == idComida);
    if (!item) return;
    item.quantidade = quantidade;
  }

  getCarrinho(): Carrinho {
    return this.carrinho;
  }
}
