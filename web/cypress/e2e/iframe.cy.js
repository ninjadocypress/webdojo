describe('iFrame', () => {
    
    it('Deve poder tocar o video de exemplo', () => {
        cy.login()
        cy.contains('Video').click()

        // think time 
        cy.wait(3000)

        // 1. Obtemos o iframe, que é um elemento que renderiza uma outra página dentro da página
        // 2. Verificamos se a página existe no DOM
        // 3. Usamos o its para pegar o conteúdo do body do primeiro iframe encontrado
        // 4. Recuperamos essa informação e transformamos em um objeto cypress com a função wrap
        // 5. Gravamos em um alias
        cy.get('iframe[title="Video Player"]')
            .should('exist')
            .its('0.contentDocument.body')
            .then(cy.wrap)
            .as('iFramePlayer')

        cy.get('@iFramePlayer')
            .find('.play-button')
            .click()
        
        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')
    })
})