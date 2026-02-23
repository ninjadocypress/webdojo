describe('Links abrindo nova guia/janela', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Validando o atributo do link do Instagram', () => {
        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
    })

    it('Acessa link de termos de uso removendo o target blank', () => {
        cy.contains('Formulários').click()

        cy.contains('a', 'termos de uso')
            .invoke('removeAttr', 'target')
            .click()

        cy.contains('1. Aceitação dos Termos')
            .should('be.visible')
    })
})