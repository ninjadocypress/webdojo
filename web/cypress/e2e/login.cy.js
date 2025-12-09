describe("Login", () => {
  it("Deve logar com sucesso", () => {
    cy.InitialVisit()
    cy.SubmitLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

  });

  it("Deve exibir mensagem de erro ao inserir senha inválida", () => {
    cy.InitialVisit()
    cy.SubmitLogin('papito@webdojo.com', 'katana321')

    cy.contains('Acesso negado! Tente novamente.')
    .should('be.visible')
  });

  it("Deve exibir mensagem de erro ao inserir email não cadastrado", () => {
    cy.InitialVisit()
    cy.SubmitLogin('123@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.')
    .should('be.visible')
  });
});
