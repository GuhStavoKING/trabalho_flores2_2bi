import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  termo: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['termo']) {
        this.termo = params['termo'];
      }
    });
  }

  buscar(): void {
    if (this.termo) {
      this.router.navigateByUrl('/busca/' + this.termo);
    }
  }
}
