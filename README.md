<h1>React & Vite & TypeScript</html>

<p>
    Neste projeto não foi utilizado o <strong>npx create-react-app myApp</strong>
    <br />
    O create-react-app é um Boilerplat, se refere a templates de código que podem ser utilizados para construção de aplicações com pouca ou nenhuma alteração.

    Ele possui as ferramentas:
    <ul>
        <li>Webpack</li>
        <li>Babel</li>
        <li>ESLint</li>
    </ul>
</p>

<h2>Criando um projeto 2022</h2>
<p>
    Em 2022 não faz mais sentido utilizar o create-react-app pois os browsers já possuem suporte ao ECMAScript Modules.
    
    <br />
    Opções:
    <ul>
        <li>Vite</li>
        <li>Snowpack</li>
    </ul>

    Browers não entendem JavaScript modernos, eles só entendem JavaScript tradicional, e por muito tempo eles também não entendiam as importações entre arquivos JavaScript. Eram utilizados os requires. Porém atualmente a grande maioria dos browsers já entendem o ESmodules (ECMAScript Modules). Por isto o Webpack não é mais necessário.
    <br />
    Por está razão está sendo utilizado o Vite e o Snowpack que utilizam desta atual atualização dos browsers que agora possuem suporte nativo ao ECMAScript Modules e só faz o restante.
    <ul>
        <li>Performatico</li>
        <li>Simplicidade na criação de projetos</li>
        <li>Mais rápido</li>
    </ul>
</p>

<h2>Formas de criar um projeto com TypeScript:</h2>

<p>yarn start</p>
<p>npm init</p>

<p>yarn create vite iniciando-react --template react-ts</p>
<p>npm vite iniciando-react --template react-ts</p>

<p>
    O <strong>Vite</strong> não vem com o gerenciador de pacote, caso não seja, logo é necessário:
    <ul>
        <li>yarn install</li>
        <li>npm install</li>
    </ul>
</p>

<h2>CSS</h2>
<p>
    <ul>
        <li>Styled Component: https://styled-components.com/</li>
        <li>SASS: https://sass-lang.com/</li>
    </ul>
</p>

<h2>Roteamento</h2>
<p>
    <h3>ReactRouter</h3>
    <p>https://reactrouter.com/en/main</p>
    <strong>yarn add react-router-dom</strong>
    <br />
    <strong>npm install react-router-dom</strong>
    <p>
        Switch garante que apenas uma única rota esteja visíel no mesmo momento. Ajuda a não confundir as rotas.
    </p>
</p>

<h2>Proximos Passos</h2>
<p>
    <strong>CSS</strong>
    <ul>
        <li>Styled Components</li>
        <li>Stitches</li>
        <li>Radix</li>
    </ul>

    <strong>Data Fetching</strong>
    <ul>
        <li>SWR</li>
        <li>React Query</li>
        <li>GraphQL</li>
        <li>uRQL</li>
        <li>Apollo Client</li>
        <li>Relay</li>
    </ul>

    <strong>State Management</strong>
    <ul>
        <li>Keep it Simple (Context + Reducer)</li>
        <li>Zustand</li>
    </ul>

    <strong>Testing</strong>
    <ul>
        <li>Testing Library</li>
        <li>Cypress</li>
    </ul>

    <strong>Framework</strong>
    <ul>
        <li>Next.js</li>
        <li>Remix</li>
    </ul>
</p>