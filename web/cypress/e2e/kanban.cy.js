describe('kanban board', () => {
    it('Deve mover uma tarefa de todo para done e atualizar o board', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.contains('Kanban').click()


        const dataTransfer = new DataTransfer()

        cy.contains('div[draggable=true]', 'Documentar API')
            .trigger('dragstart', { dataTransfer }) // Inicia o evento de arrastar a tarefa "Documentar API" e armazena os dados de transferência


        cy.get('.column-done')
            .trigger('drop', { dataTransfer }) // Solta a tarefa "Documentar API" na coluna "Done" e passa os dados de transferência para o evento de soltar
            .find('h3')
            .should('have.text', 'Done (4)')
            
            cy.get('.column-done')
            .and('include.text', 'Documentar API') // Verifica se a tarefa "Documentar API" foi movida para a coluna "Done"
            .and('include.text', 'Criar documentação da API com Swagger') // Verifica se a tarefa "Refatorar código" foi movida para a coluna "Done"



    })

})