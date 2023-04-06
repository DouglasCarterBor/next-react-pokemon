Link do curso:
https://www.youtube.com/watch?v=XHrbg2iYNCg&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=1

# Para desenvolver um projeto com Next precisamos utilizar o comando:
1. npx create-next-app <nome>
2. npm run dev

Aula 01: Introdução
Aula 02: Instalação e primeira alteração:
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

Aula 07: Componente de layout

- Componentes sempre se repetem
- Navbar e footer
- _app.tsx
- npm run dev (comando para iniciar o projeto)
