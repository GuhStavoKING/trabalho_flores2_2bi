import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RatingModule } from 'ng-starrating';

registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutoComponent } from './produto/produto.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { InicioComponent } from './inicio/inicio.component';
import { BuscaComponent } from './busca/busca.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SemResultadoComponent } from './sem-resultado/sem-resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    InicioComponent,
    BuscaComponent,
    CategoriasComponent,
    ProdutoComponent,
    CarrinhoComponent,
    RodapeComponent,
    SemResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
