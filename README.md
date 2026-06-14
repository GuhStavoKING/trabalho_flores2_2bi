# 📘 Trabalho Prático — LancheNet (Angular)

Projeto desenvolvido para a disciplina de **Programação Front-End** do curso de **Análise e Desenvolvimento de Sistemas**, com foco na prática de desenvolvimento web utilizando **Angular**, **TypeScript** e **CSS**.

---

# 📊 Informações do Projeto

| Informação | Detalhes |
| :--- | :--- |
| **Curso** | Análise e Desenvolvimento de Sistemas |
| **Disciplina** | Programação Front-End |
| **Professor** | José Carlos Domingues Flores |
| **Turma** | ADS3B |
| **Tecnologia Principal** | Angular 15 + TypeScript |
| **Ambiente de Execução** | Node.js |

---

# 🎯 Objetivo

O objetivo deste trabalho é desenvolver uma aplicação web de **cardápio digital** para a **LancheNet**, abordando conceitos fundamentais do desenvolvimento front-end com frameworks modernos, como:

* Componentes e modularização
* Roteamento entre páginas
* Serviços e injeção de dependência
* Data binding e formulários
* Diretivas estruturais (`*ngFor`, `*ngIf`)
* Comunicação entre componentes (`@Input`)
* Estilização responsiva com CSS
* Testes unitários com Karma e Jasmine

---

# 👥 Integrantes do Grupo — ADS3B

| RA | Nome |
| :--- | :--- |
| 25210888-2 | Natan Ferreira dos Santos |
| 25013061-2 | Gabriel Henry Pacheco Mormêllo |
| 25361810-2 | Matheus Gabriel Scariot |
| 25364386-2 | Gustavo Henrique Ferreira dos Santos |

---

# 🚀 Funcionalidades

A aplicação **LancheNet** possui as seguintes funcionalidades:

* ✅ Listagem de produtos na página inicial
* ✅ Busca de produtos por nome
* ✅ Filtro de produtos por categoria
* ✅ Página de detalhes com avaliação e informações do produto
* ✅ Carrinho de compras com alteração de quantidade e remoção de itens
* ✅ Cálculo automático do preço total
* ✅ Layout responsivo para diferentes tamanhos de tela
* ✅ Mensagem exibida quando nenhum resultado é encontrado

---

# 🛠️ Tecnologias Utilizadas

* Angular 15
* TypeScript
* CSS
* Angular Router
* Angular Forms
* AOS (Animate On Scroll)
* ng-starrating
* Karma + Jasmine
* Node.js
* VS Code

---

# 📂 Estrutura do Projeto

```bash
📁 Projeto_WebSiteFood-main
 ├── src
 │   ├── app
 │   │   ├── modelos/               # Classes de dados (Comida, Carrinho, Categoria...)
 │   │   ├── servicos/              # Serviços (comida.service, carrinho.service)
 │   │   ├── inicio/                # Página inicial — lista de produtos
 │   │   ├── produto/               # Página de detalhes do produto
 │   │   ├── carrinho/              # Página do carrinho
 │   │   ├── cabecalho/             # Cabeçalho da aplicação
 │   │   ├── rodape/                # Rodapé
 │   │   ├── busca/                 # Campo de busca
 │   │   ├── categorias/            # Filtro por categorias
 │   │   ├── sem-resultado/         # Mensagem quando não há resultados
 │   │   ├── app.module.ts          # Módulo principal
 │   │   └── app-routing.module.ts  # Rotas da aplicação
 │   ├── assets/                    # Imagens e recursos estáticos
 │   ├── index.html
 │   ├── main.ts
 │   └── styles.css
 │
 ├── dist/                          # Build de produção (gerado após npm run build)
 ├── angular.json
 ├── package.json
 ├── tsconfig.json
 └── README.md
▶️ Como Executar o Projeto1️⃣ Instalar o Node.jsFaça o download e instale o Node.js no site oficial:Node.js OficialApós a instalação, verifique se tudo está funcionando corretamente:Bashnode -v
npm -v
Recomenda-se utilizar a versão 16 ou superior do Node.js.2️⃣ Clonar o RepositórioBashgit clone LINK_DO_REPOSITORIO
Acesse a pasta do projeto:Bashcd Projeto_WebSiteFood-main
3️⃣ Instalar as DependênciasNo terminal execute:Bashnpm install
4️⃣ Executar em Modo de DesenvolvimentoInicie o servidor local do Angular:Bashnpm start
Acesse no navegador:http://localhost:42005️⃣ Gerar Build de ProduçãoPara compilar o projeto para produção:Bashnpm run build
Os arquivos compilados serão gerados na pasta dist/.6️⃣ Executar os TestesPara rodar os testes unitários:Bashnpm test
🗺️ Rotas da AplicaçãoRotaComponenteDescrição/inicioInicioComponentPágina inicial com produtos/busca/:termoInicioComponentBusca por nome/categoria/:nomeInicioComponentFiltro por categoria/produto/:idProdutoComponentDetalhes do produto/carrinhoCarrinhoComponentCarrinho de compras💡 ObservaçõesO projeto foi desenvolvido com Angular 15, seguindo a arquitetura em componentes gerada pelo Angular CLI.A estilização utiliza CSS puro, com layout responsivo para dispositivos móveis e desktop.A lógica de negócio está separada da interface por meio de serviços (ComidaService e CarrinhoService).O locale está configurado para português (pt) e formatação de moeda em Real (BRL).Animações de scroll são aplicadas com a biblioteca AOS (Animate On Scroll).✅ Resultado EsperadoAo executar o projeto, o usuário terá acesso a uma aplicação web com:Cabeçalho com logo LancheNet e link para o carrinhoCampo de busca para filtrar produtosFiltros por categorias (ex.: Lanches, Bebidas, Sobremesas)Cards de produtos com imagem, avaliação, origem e preçoPágina de detalhes com botão para adicionar ao carrinhoCarrinho funcional com controle de quantidade e total da compra📌 Considerações FinaisEste trabalho teve como objetivo reforçar os conceitos fundamentais de desenvolvimento front-end com Angular e TypeScript, além de proporcionar prática na construção de uma aplicação web completa, interativa e responsiva para um cardápio digital da LancheNet.📖 ReferênciasAngular Documentation. Disponível em: https://angular.io/docsMACHADO, R. Angular 11: desenvolvimento web. São Paulo: Novatec, 2021.SOARES, M. Desenvolvimento web com Angular. São Paulo: Casa do Código, 2020.
