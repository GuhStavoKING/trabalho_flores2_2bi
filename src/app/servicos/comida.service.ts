import { Injectable } from '@angular/core';
import { Comida } from '../modelos/Comida';
import { Categoria } from '../modelos/Categoria';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  getPorId(id: number): Comida {
    return this.getTodas().find(comida => comida.id == id)!;
  }

  getCategorias(): Categoria[] {
    return [
      { nome: 'Todos', quantidade: 6 },
      { nome: 'Lanche Rápido', quantidade: 4 },
      { nome: 'Pizza', quantidade: 2 },
      { nome: 'Almoço', quantidade: 3 },
      { nome: 'Comida Caseira', quantidade: 2 },
      { nome: 'Hambúrguer', quantidade: 1 },
      { nome: 'Fritas', quantidade: 1 },
    ];
  }

  getPorCategoria(categoria: string): Comida[] {
    return categoria == 'Todos'
      ? this.getTodas()
      : this.getTodas().filter(comida => comida.categorias?.includes(categoria));
  }

  getTodas(): Comida[] {
    return [
      {
        id: 1,
        nome: 'Pizza de Pepperoni',
        tempoPreparo: '10-20',
        preco: 10,
        favorito: false,
        origens: ['Itália'],
        estrelas: 4.5,
        imagem: '/assets/images/food-1.jpg',
        categorias: ['Lanche Rápido', 'Pizza', 'Almoço'],
      },
      {
        id: 2,
        nome: 'Almôndega',
        preco: 20,
        tempoPreparo: '20-30',
        favorito: true,
        origens: ['Pérsia', 'Oriente Médio', 'China'],
        estrelas: 4.7,
        imagem: '/assets/images/food-2.jpg',
        categorias: ['Comida Caseira', 'Almoço'],
      },
      {
        id: 3,
        nome: 'Hambúrguer',
        preco: 5,
        tempoPreparo: '10-15',
        favorito: false,
        origens: ['Alemanha', 'EUA'],
        estrelas: 3.5,
        imagem: '/assets/images/food-3.jpg',
        categorias: ['Lanche Rápido', 'Hambúrguer'],
      },
      {
        id: 4,
        nome: 'Batata Frita',
        preco: 2,
        tempoPreparo: '15-20',
        favorito: true,
        origens: ['Bélgica', 'França'],
        estrelas: 3.3,
        imagem: '/assets/images/food-4.jpg',
        categorias: ['Lanche Rápido', 'Fritas'],
      },
      {
        id: 5,
        nome: 'Sopa de Frango',
        preco: 11,
        tempoPreparo: '40-50',
        favorito: false,
        origens: ['Índia', 'Ásia'],
        estrelas: 3.0,
        imagem: '/assets/images/food-5.jpg',
        categorias: ['Comida Caseira', 'Sopa'],
      },
      {
        id: 6,
        nome: 'Pizza de Vegetais',
        preco: 9,
        tempoPreparo: '40-50',
        favorito: false,
        origens: ['Itália'],
        estrelas: 4.0,
        imagem: '/assets/images/food-6.jpg',
        categorias: ['Lanche Rápido', 'Pizza', 'Almoço'],
      },
    ];
  }

  getPorBusca(termo: string): Comida[] {
    return this.getTodas().filter(comida =>
      comida.nome.toLowerCase().includes(termo.toLowerCase())
    );
  }
}
