describe('kanban Board', () => {
    it('Deve mover uma tarefa de Todo para Done e atualizar o board', () => {
        cy.login()
        cy.goTo('Kanban', 'Kanban Board')

        const dataTransfer = new DataTransfer()      // Cria um objeto DataTransfer para simular o arrasto do elemento

        cy.contains('div[draggable=true]', 'Documentar API')
            .trigger('dragstart', { dataTransfer })  // Inicia o arrasto do elemento "Documentar API"

        cy.get('.column-done')
            .trigger('drop', { dataTransfer })       // Solta o elemento na coluna "Done"
            .find('h3')
            .should('have.text', 'Done (4)')         // Verifica se o elemento foi movido para a coluna "Done
        
        cy.get('.column-done')
        .should('include.text', 'Documentar API')          // Verifica se o elemento "Documentar API" está presente na coluna "Done"
        .should('include.text', 'Criar documentação da API com Swagger')             // Verifica se o elemento "Revisar código" está presente na coluna "Done"
    })
})