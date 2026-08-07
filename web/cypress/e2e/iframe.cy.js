describe('iFrame', () => {
    it('Deve poder tocar o video de exemplo', () => {
        cy.login()
        cy.goTo('Video', 'Video')

        cy.wait(3000) //espera 3 segundos para o iframe carregar

        cy.get('iframe[title="Video Player"]') //pegando tag + title
            .should('exist')
            .its('0.contentDocument.body') // o 0 é o primeiro elemento do array, que é o iframe
            .then(cy.wrap )                // wrap é para poder usar o cypress dentro do iframe
            .as('iframePlayer')            // alias para o iframe

        cy.get('@iframePlayer')
         .find('.play-button')
         .click()

         cy.get('@iframePlayer')
         .find('.pause-button')
         .should('be.visible')
    })
})