export class Comida {
  id!: number;
  nome!: string;
  preco!: number;
  categorias?: string[];
  favorito: boolean = false;
  estrelas: number = 0;
  imagem!: string;
  origens!: string[];
  tempoPreparo!: string;
}
