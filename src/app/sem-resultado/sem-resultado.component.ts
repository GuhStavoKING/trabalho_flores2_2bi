import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sem-resultado',
  templateUrl: './sem-resultado.component.html',
  styleUrls: ['./sem-resultado.component.css']
})
export class SemResultadoComponent {

  @Input() visivel: boolean = false;
  @Input() mensagem: string = 'Nada encontrado!';
  @Input() textoLink: string = 'Limpar';
  @Input() rotaLink: string = '/inicio';

}
