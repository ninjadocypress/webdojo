import { dataHojeFormatada } from '../support/ultils'

describe('login', () => {
 

  it.only('Deve logar com sucesso', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')

    cy.contains('button', 'Entrar').click()

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

      cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

      cy.getCookie('login_date').should('exist')

      cy.getCookie('login_date').should((cookie)=>{
        expect(cookie.value).to.eq(dataHojeFormatada())
      })

      cy.window().then((win)=>{
       const token = win.localStorage.getItem('token')
       expect(token).to.match(/^[a-fA-F0-9]{32}$/)
      })

  })

  it('Nao deve logar com senha inválida', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana321')

    cy.contains('button', 'Entrar')
    .click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })

    it('Nao deve logar com email nao cadastrado', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('404@webdojo.com')
    cy.get('#password').type('katana123')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')



  })

})