# 📁 Raiz do projeto (nível superior)

## node_modules/
- Contém todas as dependências instaladas (bibliotecas do Angular, RxJS,etc.)
- Não precisa mexer

## 📁.vscode/
- Config VScode

## 📁 public/ (pasta extra add por você ou template)
- Usada para colocar arquivos estáticos (imagens, icones, fontes), não é padrão Angular


## 📄 package.json
- Coração do projeto Node.js
- Lista todas as dependências e scripts que o projeto usa
    Ex: `npm install, ng serve, npm start, etc `

## 📄 angular.json
- Arquivo de config. Angular
- Controla como o projeto é construido (quais estilos e scripts sao carregados)

## 📄 tsconfig*.json
- Arquivos de configuração do TypeScript
` tsconfig.json      - Base Principal `
` tsconfig.app.json  - Configuração dos arquivos da aplicação `
` tsconfig.spec.json - Configuração para teste com Jasmine/Karma `

## 📄 .editorconfig, .gitignore, README.md
- ```.editorconfig``` Define padrões de identação e formatação
- ```.gitignore```    Diz ao Git quais arquivos não devem ser versionados (como node_modules)


### _______________________________________________________________________________________________________


# 📁 src/ → Aqui vive o código-fonte da sua aplicação

## 📄 index.html 
- A única página HTML carregada pelo navegador
- O Angular "entra" aqui e preenche com seus componentes

## 📄 main.ts
- É o ponto de entrada da aplicação Angular
- Onde o Angular inicializa e carrega o `AppComponent`

## 📄 styles.scss
- Estilos globais da Aplicação, como reset de CSS, cores, fontes, etc.


### ________________________________________________________________________________________________________


# 📁 src/app/ → Aqui começa a sua aplicação Angular
Essa pasta contém:
- O componente principal da aplicação `app.component.ts`
- Os arquivos de estilo, HTML e lógica do Angular
- Outros componentes, serviços e rotas que for criar.
Ex: 
`home.component.ts`
`user-list.component.ts`


## Resumo Visual
| Pasta / Arquivo   | Para quê serve                                           |
| ----------------- | -------------------------------------------------------- |
| `node_modules/`   | Bibliotecas instaladas                                   |
| `package.json`    | Dependências e scripts                                   |
| `angular.json`    | Configuração do projeto Angular                          |
| `src/index.html`  | Página principal da aplicação                            |
| `src/main.ts`     | Ponto inicial da aplicação Angular                       |
| `src/styles.scss` | Estilos globais                                          |
| `src/app/`        | Onde você cria componentes, telas, rotas e lógica da app |

