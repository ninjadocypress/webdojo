describe('Kanban Board', () => {
    it('Deve mover uma tarefa de Todo pra Done e atualizar o board', () => {
        cy.login()
        cy.contains('Kanban').click()

        //Recurso do JavaScript que serve para transferir um elemento html para uma outra sessão/html
        const dataTransfer = new DataTransfer()

        cy.contains('div[draggable=true]', 'Documentar API')
            .trigger('dragstart', {dataTransfer})
        
        cy.get('.column-done')
            .trigger('drop', {dataTransfer})
            .find('h3')
            .should('have.text', 'Done (4)')

        cy.get('.column-done')
            .should('include.text', 'Documentar API')
            .and('include.text', 'Criar documentação da API com Swagger')
    })
})