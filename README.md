# React & Vite & TypeScript

Neste projeto não foi utilizado o **npx create-react-app myApp**

O create-react-app é um Boilerplat, se refere a templates de código que podem ser utilizados para construção de aplicações com pouca ou nenhuma alteração.

Ele possui as ferramentas:
- Webpack
- Babel
- ESLint

## Criando um projeto 2022

Em 2022 não faz mais sentido utilizar o create-react-app pois os browsers já possuem suporte ao ECMAScript Modules.
Opções:

- Vite
- Snowpack

Browers não entendem JavaScript modernos, eles só entendem JavaScript tradicional, e por muito tempo eles também não entendiam as importações entre arquivos JavaScript. Eram utilizados os requires. Porém atualmente a grande maioria dos browsers já entendem o ESmodules (ECMAScript Modules). Por isto o Webpack não é mais necessário.
    
Por está razão está sendo utilizado o Vite e o Snowpack que utilizam desta atual atualização dos browsers que agora possuem suporte nativo ao ECMAScript Modules e só faz o restante.

- Performatico
- Simplicidade na criação de projetos
- Mais rápido

## Formas de criar um projeto com TypeScript:

**yarn start**
**npm init**

yarn create vite iniciando-react --template react-ts
npm vite iniciando-react --template react-ts

O **Vite** não vem com o gerenciador de pacote, caso não seja, logo é necessário:
- yarn install
- npm install

## CSS
- Styled Component: https://styled-components.com/
- SASS: https://sass-lang.com/
    
## Roteamento
### ReactRouter
https://reactrouter.com/en/main
**yarn add react-router-dom**

**npm install react-router-dom**

Switch garante que apenas uma única rota esteja visíel no mesmo momento. Ajuda a não confundir as rotas.

## Proximos Passos
**CSS**

-- Styled Components
-- Stitches
-- Radix

**Data Fetching**

-- SWR
-- React Query
-- GraphQL
-- uRQL
-- Apollo Client
-- Relay

**State Management**

-- Keep it Simple (Context + Reducer)
-- Zustand

**Testing**

-- Testing Library
-- Cypress

**Framework**

-- Next.js
-- Remix