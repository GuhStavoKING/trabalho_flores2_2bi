import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComidaService } from '../servicos/comida.service';
import { Comida } from '../modelos/Comida';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  comidas: Comida[] = [];

  constructor(private comidaService: ComidaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['termo']) {
        this.comidas = this.comidaService.getPorBusca(params['termo']);
      } else if (params['nome']) {
        this.comidas = this.comidaService.getPorCategoria(params['nome']);
      } else {
        this.comidas = this.comidaService.getTodas();
      }
    });
  }
}
