### Criando projeto com nextJS
* link base
```
https://www.youtube.com/watch?v=3HF7qYrrKZY&list=PLW-dZIlNFXq9VPwoFW2vUvFtbWwcXmnFG
```

#### Conferir a versão e se tem um nodejs instalado
* 1. nodejs instalado
node --version

* 2. qual versão do npm 
npm --version

#### Criando projeto com as opções que usei com Tailwind CSS
* 3. criando aplicação nextjs
npx create-next-app@latest app-money
    √ Would you like to use TypeScript? ... Yes
    √ Would you like to use ESLint? ... No
    √ Would you like to use Tailwind CSS? ... Yes
    √ Would you like to use `src/` directory? ... Yes
    √ Would you like to use App Router? (recommended) ... Yes
    √ Would you like to customize the default import alias (@/*)? ... No

* 3. 1 Entrando na pasta e rodar aplicação
    cd app-money
    npm run dev

#### Definindo estruturas e arquivos modificados
    * page.tsx --> nosso arquivo index da aplicação usando nextjs v14 antigamente na versão 13 era index.tsx
    * layout.tsx --> configurar liguagem
    * global styles deixar somente as 3 primeiras linhas
    * tsconfig.json --> alterar "moduleResolution": "bundler", para --> "moduleResolution": "Node",

#### Pontos importantes e bibliotecas usadas
* 1. Tailwind CSS
    ```
    https://tailwindcss.com/
    ```
* 2. Shadcn/ui
    ```
    https://ui.shadcn.com/
    ```
* 2. 1 Usando a biblioteca Shadcn/ui
    ```
    npm i shadcn-ui
    ```
* 2. 2 Usando a biblioteca Shadcn/ui
    ``` New York Basico
    npx shadcn-ui@latest init
    ```
* 2. 2 Apontando o arquivo global css
     Where is your global CSS file? » src/app/global.css

##### Todas configurações marcadas
    √ Would you like to use TypeScript (recommended)? ... yes
√ Which style would you like to use? » New York
√ Which color would you like to use as base color? » Slate
√ Where is your global CSS file? ... src/app/global.css
√ Would you like to use CSS variables for colors? ... yes
√ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... yes
√ Write configuration to components.json. Proceed? ... yes


#### Proximo