describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

  })

    it('Não deve logar com senha inválida', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana321')

    cy.contains('button', 'Entrar').click()
    
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })

   it('Não deve logar com e-mail não cadastrado', () => {
    cy.start()
    cy.submitLoginForm('404@webdojo.com', 'katana123')
    
    cy.contains('Acesso negado! Tente novamente.')
      .should('be.visible')

  })

   it('Não deve logar com campo e-mail vazio', () => {
    cy.start()
    cy.get('#password').type('katana123')
    cy.contains('button', 'Entrar').click()
    
    cy.contains('Ei, não esqueça de digitar seu email!')
      .should('be.visible')

  })

  it('Não deve logar com campo senha vazio', () => {
    cy.start()
    cy.get('#email').type('papito@webdojo.com')
  
    cy.contains('button', 'Entrar').click()
    
    cy.contains('Você precisa de uma senha para entrar! 🔒')
      .should('be.visible')

  })
})