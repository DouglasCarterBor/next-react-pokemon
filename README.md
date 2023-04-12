Link do curso:
https://www.youtube.com/watch?v=XHrbg2iYNCg&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=1

# Para desenvolver um projeto com Next precisamos utilizar o comando:
1. npx create-next-app <nome>
2. npm run dev

Aula 01: Introdução
Aula 02: Instalação e primeira alteração
Aprendi que Next.js utiliza o react e tem uma estrutura de componentes.
Ansioso para hospedar está página e verificar a performance na Web.
Aula 03: Estrutura de Pastas
Vamos ver como é o esqueleto...
node_modules (classica em todos os projetos que envolvam NPM)

- Fica sempre no .gitignore
- Geralmente tem uns 100 Mb, tudo que estamos executando chama algo aqui dentro (dependências).
- README.md para explicar como o projeto funciona
- .eslintrc.json é o analisador.
- next.config.js é um configurador, para personalizar o comportamento.
- .gitgnore ignora no git
- .next pasta oculta, onde o projeto é gerado (gera visualização em tempo real)
- styles colocar todos os estilos
- public para colocar as imagens
- pages todas as páginas do projeto
- pages/api/index.tsx (simula a página inícial)
- pages/api/_app.tsx personaliza o comportamento padrão do Next.js para a renderização de páginas, permitindo que você crie uma experiência de usuário única e personalizada.
- pages/api/_document.tsx personaliza HTML e o Head de todas as páginas

Aula 04: Páginas e roteamento

- Os arquivos geram roteamento
Aprendi a gerar nóvas páginas

Aula 05: Nested Routes

- As Nested Routes são rotas compostas /product/shirt

05/04/2023
14:29 - 15:30

Aula 06: Navegado entre páginas

- Vamos utilizar o componente Link;
- Semelhante ao do React Router, porém este é Next;
- Precisamos passar o link da página pela prop href do componente;

Aula 07: Novos Componentes

- É possível criar componentes da mesma maneira que em React;
- Uma convenção mito utilizada é criar uma pasta de componentes e colocá-los lá;
- Não confundir pages com components

06/04/2023
18:00 - 18:18
18:30 - 19:30

Aula 08: Componente de layout

- Componentes sempre se repetem
- Navbar e footer
- _app.tsx
- npm run dev (comando para iniciar o projeto)

19:30 - 18:00

Aula 09: CSS e Next.js

- Duas formas
- Estilo Global e CSS Modular
- basta criar um arquivo .css com o nome do componente, exemplo> Home.module.css

21:16 - 20:30
10:00 - 10:30

Aula 10: Meta dados no Next

- Podemos inserir informações como title e outras meta tags a partir de componente especial chamado Head
- Dentro dele passamos parâmetros que queremos configurar para cada página
- Dá para ter uma Head em cada página, com descrição e Favicon

21:56 - 22:20

Aula 11: Inserindo assets

- Os assets ficam sempre na pasta public
- Para linkar partir do public
- Images dentro de public
- Background images funcionam da mesma maneira

Aprendi a colocar imagens no site

07:44 - 08:30

Aula 12: Resgate de dados dinâmicos

- Pra pegar os dados dinâmicos getStaticProps
- Utilizada na própria página
- Ela deve retornar um objeto com dados
- Sensação de carregamento instantâneo
- Pre-rendering

jsonplaceholder.typicode.com/todos

21:49 - 22:38

Aula 13: Rotas dinâmicas

- Podemos criar rotas dinâmicas, ou seja, que são geradas pelo próprio Next
- Para isso criar um arquivo padrão: [id].js
- Onde Id seria o dado que é alterado em cada página
- Desta maneira temos páginas que são criadas automaticamente, melhor para quando não temos controle de quantas precisaremos.
- Rotas dinâmicas partindo de rotas dinâmicas

Aprendi a criar uma rota dinâmica baseada em uma rota dinâmica

15:00 - 16:00

Aula 14: Rotas dinâmicas com dados reais

- Para exibir dados nestas rotas, vamos precisar utilizar o método getStaticProps
- E também getStaticPaths, este vai fazer a criação das páginas dinêmicas em HTML
- Agora podemos acessar o objeto com os dados dentro do componente da página

Aprendi um pouco mais sobre getStaticProps e getStaticPaths, mas ainda bem confuso.

16:00 - 17:14

Aula 15: Página 404 customizada

- Para criar uma página 404 customizada é simples!
- Precisamos criar um arquivo 404.js em pages;
- E a partir dele desenvolvemos os componentes e estilos;

13:00 - 14:00

Aula 16: Inspecionando o build

- npm run build
- O Next mostra como os arquivos foram gerados
- Nos dando detales importantes sobre nosso projeto

21:00 - 21:47

