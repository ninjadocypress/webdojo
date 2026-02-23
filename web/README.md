# 🧪 Testes Automatizados - Webdojo

Projeto de automação de testes End-to-End (E2E) da aplicação
**Webdojo**, utilizando o framework **Cypress**.

A aplicação Webdojo está no mesmo repositório e os testes validam os
principais fluxos da aplicação, como login e interações com formulários.

------------------------------------------------------------------------

## 📌 Tecnologias Utilizadas

-   Cypress
-   JavaScript
-   Node.js
-   Serve

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    WEB
    ├── cypress
    │   ├── e2e
    │   ├── fixtures
    │   │   ├── cep.json
    │   │   ├── consultancy.json
    │   │   └── document.pdf
    │   └── support
    │       ├── actions
    │       │   └── consultancy.actions.js
    │       ├── commands.js
    │       ├── e2e.js
    │       └── utils.js
    │
    ├── dist
    ├── node_modules
    ├── .gitignore
    ├── cypress.config.js
    ├── package.json
    └── package-lock.json

------------------------------------------------------------------------

## 🚀 Como Executar o Projeto

### 1️⃣ Instalar as dependências

``` bash
npm install
```

------------------------------------------------------------------------

### 2️⃣ Subir a aplicação Webdojo

``` bash
npm run dev
```

A aplicação ficará disponível em:

    http://localhost:3000

------------------------------------------------------------------------

## 🧪 Executando os Testes

### ▶️ Executar todos os testes (modo headless)

``` bash
npm run test
```

------------------------------------------------------------------------

### 🖥 Executar testes no modo interativo (UI)

``` bash
npm run test:ui
```

------------------------------------------------------------------------

### 🔐 Executar apenas os testes de login (Desktop)

``` bash
npm run test:login
```

------------------------------------------------------------------------

### 📱 Executar teste de login (Mobile)

``` bash
npm run test:login:mobile
```

------------------------------------------------------------------------

## 📐 Estratégia de Automação

-   Separação de responsabilidades
-   Uso de fixtures para massa de dados
-   Abstração de ações reutilizáveis
-   Custom commands para reaproveitamento
-   Configuração de viewport para testes responsivos

------------------------------------------------------------------------

## 📌 Requisitos

-   Node.js 16+
-   NPM 8+

------------------------------------------------------------------------

## 👨‍💻 Autor

Projeto desenvolvido para fins de estudo e prática de automação de
testes com Cypress.
