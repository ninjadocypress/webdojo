describe('iframe', () => {

    it('Deve tocar o video', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.contains('Video').click()


        cy.get('iframe[title="Video Player"]') // Obtem a tag HTML que tem o título de Video Playerque é o elemento que renderiza essa página de video do youtube
            .should('exist') // Verifica se o elemento existe
            .its('0.contentDocument.body') // Pega o corpo que é exibido dentro do iframe, que é o conteúdo do vídeo
            .then(cy.wrap) // Recupera o conteúdo do vídeo e transforma em um objeto Cypress para que possamos interagir com ele
            .as('iFramePlayer') // Grava o conteúdo do objeto em uma variável chamada iFramePlayer para que possamos reutilizar ele em outros comandos

        cy.get('@iFramePlayer') // Chama o Iframe
         .find('.play-button') // Procura o botão de play do vídeo dentro do iframe
         .click() // Clica no botão de play

         cy.get('@iFramePlayer')
         .find('.pause-button') // Procura o botão de pause do vídeo dentro do iframe
         .should('exist') // Verifica se o botão de pause existe, ou seja, se o vídeo está tocando


    })

})