describe('Links abrindo uma nova guia/janela', () => {

    beforeEach(() => {
        cy.login()
    })

    it('validando atribubuto do link do instagram', () => {
            cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')

    })

    it('validando termos de uso', () => {

        cy.contains('Formulários').click()

        cy.contains('a', 'termos de uso')
            .invoke('removeAttr', 'target')
            .click()

        cy.contains('Ao acessar e usar nossos serviços, você concorda em cumprir estes termos de uso. Se você não concordar com algum aspecto destes termos, não utilize nossos serviços.')
            .should('be.visible')

    })

})