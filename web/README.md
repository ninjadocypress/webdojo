# 🧪 Webdojo — Projeto de Testes Automatizados com Cypress

## 📋 Sobre o projeto

Este projeto contém uma suíte de **testes automatizados E2E (End-to-End)** desenvolvida com **Cypress** para validar os principais fluxos da aplicação **Webdojo**.

A aplicação Webdojo e os testes automatizados estão no **mesmo repositório**.

Para que os testes possam ser executados corretamente, a aplicação Webdojo precisa estar em execução localmente antes da execução do Cypress.

---

## 🎯 Objetivo

O objetivo do projeto é automatizar cenários de testes da aplicação Webdojo, garantindo que os principais fluxos funcionem conforme o comportamento esperado.

A automação busca:

* Validar funcionalidades críticas da aplicação;
* Identificar regressões;
* Reduzir o esforço de testes manuais;
* Aumentar a confiabilidade das entregas;
* Permitir a execução repetitiva e consistente dos cenários;
* Servir como prática de automação de testes E2E com Cypress.

---

## 🛠️ Tecnologias utilizadas

* **Cypress** — automação de testes E2E
* **JavaScript** — linguagem utilizada nos testes
* **Node.js** — ambiente de execução
* **npm** — gerenciamento de dependências e scripts
* **Git / GitHub** — versionamento do projeto

---

## 📁 Estrutura do projeto

A aplicação Webdojo e os testes automatizados ficam no mesmo repositório.

```text
web/
└── cypress/
    ├── e2e/                           
    ├── fixtures/                      
    │   ├── cep.json                   
    │   ├── consultancy.json           
    │   └── document.pdf               
    └── support/                       
        ├── actions/                   
        │   └── consultancy.actions.js 
        ├── commands.js                
        ├── e2e.js                    
        └── ultils.js                  
└── README.md
```

### Principais diretórios

| Diretório          | Descrição                                      |
| ------------------ | ---------------------------------------------- |
| `cypress/e2e`      | Contém os cenários de testes E2E               |
| `cypress/fixtures` | Contém dados utilizados pelos testes           |
| `cypress/support`  | Contém configurações e recursos compartilhados |
| `package.json`     | Contém dependências e scripts do projeto       |

---

# 🚀 Como executar o projeto

## 1. Pré-requisitos

Antes de executar os testes, é necessário ter instalado:

* Node.js
* npm

Após clonar o repositório, instale as dependências:

```bash
npm install
```

---

## 2. Iniciar a aplicação Webdojo

A aplicação Webdojo está no **mesmo repositório dos testes**.

Antes de executar o Cypress, é necessário iniciar a aplicação utilizando:

```bash
npm run dev
```

Esse comando executa:

```bash
serve -s dist -p 3000
```

A aplicação ficará disponível localmente em:

```text
http://localhost:3000
```

> **Importante:** mantenha o terminal com `npm run dev` em execução enquanto os testes estiverem sendo executados.

---

# 🧪 Executando os testes

Depois que a aplicação estiver rodando em `http://localhost:3000`, abra outro terminal no diretório do projeto.

## Executar toda a suíte

Para executar todos os testes em modo headless:

```bash
npm test
```

Esse comando executa:

```bash
npx cypress run --config viewportWidth=1440,viewportHeight=900
```

O Cypress será executado utilizando:

* **Viewport:** 1440 × 900 pixels
* **Modo:** Headless
* **Escopo:** Todos os testes encontrados no diretório `cypress/e2e`

---

## 🖥️ Executar Cypress em modo interativo

Para abrir a interface gráfica do Cypress:

```bash
npm run test:ui
```

Esse comando executa:

```bash
npx cypress open
```

O modo interativo é recomendado durante o desenvolvimento e manutenção dos testes, pois permite acompanhar visualmente a execução dos cenários.

---

## 🔐 Executar somente os testes de Login

Para executar especificamente o cenário de login:

```bash
npm run test:login
```

Esse comando executa:

```bash
npx cypress run --spec 'cypress/e2e/login.cy.js' --config viewportWidth=1440,viewportHeight=900
```

O teste será executado utilizando o viewport de:

```text
1440 × 900 pixels
```

---

# 📜 Scripts disponíveis

Os scripts configurados no `package.json` são:

```json
{
  "scripts": {
    "dev": "serve -s dist -p 3000",
    "test": "npx cypress run --config viewportWidth=1440,viewportHeight=900",
    "test:ui": "npx cypress open",
    "test:login": "npx cypress run --spec 'cypress/e2e/login.cy.js' --config viewportWidth=1440,viewportHeight=900"
  }
}
```

| Comando              | Descrição                                |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Inicia a aplicação Webdojo na porta 3000 |
| `npm test`           | Executa toda a suíte de testes Cypress   |
| `npm run test:ui`    | Abre o Cypress em modo interativo        |
| `npm run test:login` | Executa somente os testes de login       |

---

# 🔄 Fluxo de execução

Como a aplicação e os testes estão no mesmo repositório, a sequência recomendada é:

```text
1. Clonar o repositório
        ↓
2. npm install
        ↓
3. npm run dev
        ↓
4. Aplicação disponível em localhost:3000
        ↓
5. Abrir um segundo terminal
        ↓
6. Executar os testes Cypress
        ↓
7. Validar o resultado dos testes
```

### Exemplo

**Terminal 1 — Aplicação**

```bash
npm run dev
```

Resultado esperado:

```text
Aplicação disponível em http://localhost:3000
```

**Terminal 2 — Testes**

```bash
npm test
```

Ou, para executar somente o login:

```bash
npm run test:login
```

---

# 🔍 Estratégia de testes

Os testes são desenvolvidos utilizando a abordagem **End-to-End (E2E)**, simulando a interação de um usuário com a aplicação.

Os cenários podem contemplar:

* Acesso à aplicação;
* Login;
* Preenchimento de formulários;
* Interação com elementos da interface;
* Navegação entre páginas;
* Validação de mensagens;
* Validação de estados dos elementos;
* Validação de comportamentos esperados;
* Cenários positivos e negativos.

---

# ✅ Assertions

As **Assertions** são utilizadas para validar se o comportamento apresentado pela aplicação corresponde ao resultado esperado.

Exemplo:

```javascript
cy.get('[data-testid="login-button"]')
  .should('be.visible')
  .and('be.enabled');
```

Nesse exemplo, o teste verifica se o botão de login:

1. Está visível;
2. Está habilitado.

As assertions podem ser utilizadas para validar elementos, textos, URLs, estados, mensagens e outros comportamentos da aplicação.

---

# 🏷️ Seletores

Sempre que possível, recomenda-se utilizar seletores estáveis, como `data-testid`.

Exemplo:

```javascript
cy.get('[data-testid="email"]')
```

Essa abordagem ajuda a reduzir a dependência de classes CSS ou da estrutura visual da página, tornando os testes mais resistentes a alterações no front-end.

---

# 📊 Benefícios da automação

A automação dos testes permite:

* ⚡ Execução rápida dos cenários;
* 🔁 Repetição dos testes de forma consistente;
* 🐞 Identificação de regressões;
* 🔍 Maior cobertura dos fluxos críticos;
* 📉 Redução do esforço de testes manuais;
* 🔄 Facilidade de execução durante o desenvolvimento;
* 📈 Evolução contínua da cobertura automatizada.

---

# 🛠️ Próximas evoluções

Como evolução do projeto, podem ser adicionadas novas práticas e recursos de automação, como:

* **Fixtures** para gerenciamento de massa de dados;
* **Custom Commands** para ações reutilizáveis;
* `cy.intercept()` para interceptação e validação de APIs;
* `cy.request()` para testes de API;
* Organização dos testes utilizando uma arquitetura mais escalável;
* Geração de screenshots e vídeos como evidências;
* Relatórios de execução;
* Integração com **CI/CD**;
* Execução automática dos testes a cada alteração no código;
* Aumento da cobertura dos fluxos críticos da aplicação.

---

# 👩‍💻 Objetivo profissional do projeto

Este projeto também representa a aplicação prática de conhecimentos em **Quality Assurance e automação de testes**, utilizando Cypress para construção e manutenção de uma suíte de testes E2E.

A proposta é demonstrar conhecimentos em:

* Automação Web;
* Testes End-to-End;
* Assertions;
* Seletores;
* Organização de suítes;
* Execução de testes;
* Identificação de regressões;
* Boas práticas de automação.

---

## 🚀 Quick Start

Para executar o projeto rapidamente:

### Terminal 1

```bash
npm install
npm run dev
```

### Terminal 2

```bash
npm test
```

Para executar apenas o login:

```bash
npm run test:login
```

Para abrir o Cypress:

```bash
npm run test:ui
```

---

**Projeto:** Webdojo Test Automation
**Framework:** Cypress
**Tipo de teste:** E2E / Web Testing
