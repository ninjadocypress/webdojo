///<reference types="cypress" />

describe('Login', () => {

  it('Deve logar com sucesso', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')
    cy.contains('button', 'Entrar').click()
    cy.get('[data-cy="user-name"]')
      .should('have.text', 'Fernando Papito')
      .and('be.visible')
    cy.get('[data-cy="welcome-message"]')
      .should('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
      .and('be.visible')
  })

  it('Não deve logar com senha inválida', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana1234')
    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')
  })

it('Não deve logar com email inválido', () => {
  cy.viewport(1440, 900)
  cy.visit('http://localhost:3000')
  cy.get('#email').type('404papito@webdojo.com')
  cy.get('#password').type('katana123')
  cy.contains('button', 'Entrar').click()
  cy.contains('Acesso negado! Tente novamente.')
    .should('be.visible')
})
})