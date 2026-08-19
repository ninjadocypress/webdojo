# WebDojo - Testes Automatizados com Cypress

Projeto de automação de testes end-to-end (E2E) para a aplicação **WebDojo**, utilizando o framework **Cypress**.

O projeto contempla testes automatizados para funcionalidades da aplicação WebDojo, incluindo autenticação e fluxo de consultoria, além de testes executados em diferentes configurações de viewport.

---

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- NPM
- HTML / CSS
- Git / GitHub

---

## Estrutura do projeto

A estrutura principal do projeto de testes está organizada da seguinte forma:

```text
cypress/
├── e2e/
│   ├── login.cy.js
│   └── consultancy.cy.js
│
├── fixtures/
│   ├── cep.json
│   ├── consultancy.json
│   └── teste123.pdf
│
└── support/
    ├── actions/
    │   └── consultancy.actions.js
    │
    ├── commands.js
    ├── e2e.js
    ├── helper.js
    └── utils.js
```

### `cypress/e2e`

Contém os arquivos de especificação dos testes automatizados.

- `login.cy.js` — testes relacionados ao processo de login.
- `consultancy.cy.js` — testes relacionados ao fluxo de consultoria.

Os arquivos utilizam a extensão `.cy.js`, padrão utilizado pelo Cypress para identificação dos arquivos de teste.

### `cypress/fixtures`

Contém arquivos utilizados como massa de dados durante a execução dos testes.

- `cep.json` — dados relacionados a CEP/endereço.
- `consultancy.json` — dados utilizados no preenchimento dos formulários de consultoria.
- `teste123.pdf` — arquivo utilizado em cenários que envolvem upload de documentos.

O uso de fixtures permite separar os dados de teste da implementação dos cenários, facilitando a manutenção e reutilização das massas.

### `cypress/support`

Contém arquivos de suporte utilizados pelos testes.

#### `actions/consultancy.actions.js`

Contém ações relacionadas ao fluxo de consultoria, permitindo centralizar comportamentos e reduzir duplicação de código nos arquivos de teste.

#### `commands.js`

Arquivo destinado à criação de **Custom Commands** do Cypress.

Os comandos personalizados podem encapsular comportamentos utilizados em diferentes cenários de teste.

#### `e2e.js`

Arquivo de configuração e inicialização dos testes E2E.

É carregado automaticamente pelo Cypress antes da execução dos testes e pode ser utilizado para importar comandos, configurações e comportamentos globais.

#### `helper.js`

Contém funções auxiliares utilizadas pelos testes, permitindo reutilizar lógica comum e manter os arquivos de especificação mais organizados.

#### `utils.js`

Contém funções utilitárias e comportamentos genéricos utilizados em diferentes partes da automação.

---

# Pré-requisitos

Antes de executar os testes, é necessário ter instalado:

- Node.js
- NPM

Para verificar se o Node.js está instalado:

```bash
node --version
```

Para verificar a versão do NPM:

```bash
npm --version
```

---

# Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse o diretório do projeto:

```bash
cd <NOME_DO_PROJETO>
```

Instale as dependências:

```bash
npm install
```

---

# Executando a aplicação WebDojo

A aplicação WebDojo está presente no mesmo repositório do projeto de testes.

Antes de executar os testes automatizados, é necessário iniciar a aplicação.

Execute:

```bash
npm run dev
```

A aplicação será disponibilizada localmente na porta `3000`.

Por padrão:

```text
http://localhost:3000
```

> **Importante:** mantenha o processo do `npm run dev` em execução enquanto os testes estiverem sendo executados.

---

# Executando os testes

## Executar todos os testes

Para executar toda a suíte de testes em modo headless:

```bash
npm test
```

Esse comando executa:

```bash
npx cypress run
```

## Abrir o Cypress em modo interativo

Para abrir a interface gráfica do Cypress:

```bash
npm run test:ui
```

Esse modo permite selecionar os testes e acompanhar sua execução visualmente.

---

# Testes de Login

## Login - Desktop

Para executar especificamente os testes de login utilizando uma viewport de:

- Largura: `1440px`
- Altura: `900px`

Execute:

```bash
npm run test:login
```

Esse comando executa:

```bash
npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900
```

## Login - Mobile

Para executar os testes de login utilizando uma viewport mobile:

- Largura: `414px`
- Altura: `896px`

Execute:

```bash
npm run test:login:mobile
```

Esse cenário permite validar o comportamento da funcionalidade de login em uma resolução típica de dispositivos móveis.

## Login - Interface gráfica

Para abrir somente os testes de login na interface do Cypress:

```bash
npm run test:login:ui
```

---

# Testes de Consultancy

## Consultancy - modo headless

Para executar os testes automatizados relacionados ao fluxo de consultoria:

```bash
npm run test:consultancy
```

Esse comando executa:

```bash
npx cypress run --spec cypress/e2e/consultancy.cy.js
```

## Consultancy - interface gráfica

Para abrir os testes de consultoria no Cypress:

```bash
npm run test:consultancy:ui
```

---

# Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia a aplicação WebDojo na porta 3000 |
| `npm test` | Executa toda a suíte de testes em modo headless |
| `npm run test:ui` | Abre o Cypress em modo interativo |
| `npm run test:login` | Executa os testes de login em viewport desktop |
| `npm run test:login:mobile` | Executa os testes de login em viewport mobile |
| `npm run test:login:ui` | Abre os testes de login no Cypress |
| `npm run test:consultancy` | Executa os testes de consultoria em modo headless |
| `npm run test:consultancy:ui` | Abre os testes de consultoria no Cypress |

---

# Fluxo recomendado para execução

Como a aplicação WebDojo e os testes automatizados estão no mesmo repositório, recomenda-se utilizar dois terminais.

### Terminal 1 - Aplicação

```bash
npm run dev
```

### Terminal 2 - Testes

Para executar todos os testes:

```bash
npm test
```

Ou, para executar os testes através da interface gráfica:

```bash
npm run test:ui
```

---

# Cenários automatizados

## Login

- Login com credenciais válidas.
- Validação de credenciais inválidas.
- Validação de mensagens de erro.
- Validação do comportamento em viewport desktop.
- Validação do comportamento em viewport mobile.

## Consultancy

- Preenchimento do formulário de consultoria.
- Validação dos campos obrigatórios.
- Consulta e preenchimento de endereço através do CEP.
- Upload de arquivo.
- Validação do envio do formulário.

> Os cenários acima representam a organização funcional da suíte. Para manter a documentação alinhada ao código, ajuste a lista caso algum cenário específico seja diferente da implementação atual.

---

# Fixtures e massa de dados

Os dados utilizados durante os testes são armazenados na pasta:

```text
cypress/fixtures/
```

Durante os testes, esses dados podem ser carregados utilizando o recurso de fixtures do Cypress.

Exemplo:

```javascript
cy.fixture('consultancy').then((data) => {
    // utilização dos dados
})
```

Essa abordagem permite alterar os dados de teste sem necessariamente modificar a implementação dos cenários.

---

# Boas práticas utilizadas

O projeto busca seguir boas práticas de automação:

- Separação entre testes e massa de dados.
- Reutilização de ações através de funções auxiliares.
- Utilização de Custom Commands quando apropriado.
- Organização dos testes por funcionalidade.
- Execução dos testes em diferentes resoluções.
- Evitar duplicação de código.
- Manter os testes independentes sempre que possível.
- Utilizar seletores estáveis para os elementos da aplicação.
- Manter a suíte de testes simples e de fácil manutenção.

---

# Objetivo do projeto

O objetivo deste projeto é demonstrar a implementação de uma suíte de testes automatizados utilizando Cypress para validação de uma aplicação Web.

A automação busca aumentar a confiabilidade das entregas através da validação automatizada dos principais fluxos funcionais, permitindo identificar regressões de forma rápida e reproduzível.

---

# Autor

**Renan Rodrigues Lapadula**

QA Engineer | Test Automation
