describe('Gerenciamento de Perfis no Github', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')

    })

    it('Deve poder cadastrar um novo perfil no GitHub', () => {
        cy.get('#name').type('Débora Barbosa')
        cy.get('#username').type('deborabarbosap')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Marcos Guilherme')
        cy.get('#username').type('guilhermepaixao')
        cy.get('#profile').type('INFRA')

        cy.contains('button', 'Adicionar Perfil').click()


        cy.contains('table tbody tr', 'deborabarbosap')
            .should('be.visible')
            .contains('Débora Barbosa')
            .should('be.visible')

        cy.contains('table tbody tr', 'deborabarbosap')
            .should('be.visible')
            .contains('QA')
            .should('be.visible')

        cy.contains('table tbody tr', 'guilhermepaixao')
            .should('be.visible')
            .contains('guilhermepaixao')
            .should('be.visible')

        cy.contains('table tbody tr', 'guilhermepaixao')
            .should('be.visible')
            .contains('INFRA')
            .should('be.visible')


    })



    it('Deve poder remover um pergil do github', () => {

        const profile = {
            name: 'Debora Barbosa',
            usaername: 'deborabarbosap',
            profile: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.usaername)
        cy.get('#profile').type(profile.profile)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.usaername)
            .should('be.visible')
            .as('trProfile')


        cy.get('@trProfile').find('button[title="Remover perfil"]').click()

        cy.contains('table tbody', profile.usaername)
           .should('not.exist')



    })

    it('Deve validar o link do Github', () => {

        const profile = {
            name: 'Debora Barbosa',
            usaername: 'deborabarbosap',
            profile: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.usaername)
        cy.get('#profile').type(profile.profile)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.usaername)
            .should('be.visible')
            .as('trProfile')


        cy.get('@trProfile').find('a')
        .should('have.attr', 'href', 'https://github.com/deborabarbosap')

    })
})