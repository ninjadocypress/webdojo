describe('Gerenciamento de Perfils no Github', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('Deve poder cadastrar um novo perfil do github', () => {
        cy.get('#name').type('Renan Lapadula')
        cy.get('#username').type('lapadulainveste-oss')
        cy.get('#profile').type('QA')

        cy.contains('Button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', 'lapadulainveste-oss')
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .contains('td', 'Renan Lapadula')
            .should('be.visible')

        cy.get('@trProfile')
            .contains('td', 'QA')
            .should('be.visible')
    })
    it('Deve porder remover um perfil do github', () => {

        const profile = {
            name: 'Renan lapadula',
            username: 'lapadula123',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('Button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile').find('button[title="Remover perfil"]').click()

        cy.contains('table tbody', profile.username)
            .should('not.exist')
    })
    it('Acessar o meu perfil no github', () => {

        const profile = {
            name: 'Renan lapadula',
            username: 'lapadulainveste-oss',
            desc: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.desc)

        cy.contains('Button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.username)
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile').find('a')
            .should('have.attr', 'href', 'https://github.com/lapadulainveste-oss')
            .and('have.attr', 'target', '_blank')
    })
})