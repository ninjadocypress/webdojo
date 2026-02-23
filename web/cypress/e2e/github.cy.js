describe('Gerenciamento de Perfis no GitHub', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })
    it('Deve poder cadastrar um novo perfil do github', () => {
        cy.get('#name').type('Daniel Araújo Berriel')      
        cy.get('#username').type('FilipeDeschamps')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Daniel Araújo Berriel')      
        cy.get('#username').type('DanielBerriel')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()
        
        cy.contains('table tbody tr', 'DanielBerriel')
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .contains('td', 'Daniel Araújo Berriel')
            .should('be.visible')

        cy.get('@trProfile')
            .contains('td', 'QA')
            .should('be.visible')
        
    })

    it('Deve validar o link do github', () => {

        const profile = {
            name: 'Daniel Araújo Berriel',
            username: 'DanielBerriel123',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)      
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()


        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .find('button[title="Remover perfil"]')
            .click()

        cy.contains('table tbody', profile.username)
            .should('not.exist')

    })

    it('Deve acessar o meu perfil no github', () => {

        const profile = {
            name: 'Daniel Araújo Berriel',
            username: 'DanielBerriel',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)      
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('button', 'Adicionar Perfil').click()


        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .find('a')
            .should('have.attr', 'href', 'https://github.com/' + profile.username)
            .and('have.attr', 'target', '_blank')
            

    })
})