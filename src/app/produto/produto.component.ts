import { Component, OnInit } from '@angular/core';
import { Comida } from '../modelos/Comida';
import { ActivatedRoute, Router } from '@angular/router';
import { ComidaService } from '../servicos/comida.service';
import { CarrinhoService } from '../servicos/carrinho.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  comida!: Comida;

  constructor(
    private route: ActivatedRoute,
    private comidaService: ComidaService,
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {
    route.params.subscribe((params) => {
      if (params['id']) {
        this.comida = comidaService.getPorId(params['id']);
      }
    });
  }

  ngOnInit(): void {}

  adicionarAoCarrinho(): void {
    this.carrinhoService.adicionar(this.comida);
    this.router.navigateByUrl('/carrinho');
  }
}
