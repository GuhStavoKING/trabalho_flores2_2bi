import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../modelos/Categoria';
import { ComidaService } from '../servicos/comida.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Input()
  categoriasProduto?: string[];

  @Input()
  alinhar: string = 'center';

  categorias?: Categoria[];

  constructor(private comidaService: ComidaService) {}

  ngOnInit(): void {
    if (!this.categoriasProduto) {
      this.categorias = this.comidaService.getCategorias();
    }
  }
}
