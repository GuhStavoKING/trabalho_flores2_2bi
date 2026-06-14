import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../servicos/carrinho.service';
import { Carrinho } from '../modelos/Carrinho';
import { ItemCarrinho } from '../modelos/ItemCarrinho';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho!: Carrinho;

  constructor(private carrinhoService: CarrinhoService) {
    this.atualizarCarrinho();
  }

  ngOnInit(): void {}

  remover(item: ItemCarrinho): void {
    this.carrinhoService.remover(item.comida.id);
    this.atualizarCarrinho();
  }

  alterarQuantidade(item: ItemCarrinho, quantidadeTexto: string): void {
    const quantidade = parseInt(quantidadeTexto);
    this.carrinhoService.alterarQuantidade(item.comida.id, quantidade);
    this.atualizarCarrinho();
  }

  atualizarCarrinho(): void {
    this.carrinho = this.carrinhoService.getCarrinho();
  }
}
