import { faker } from '@faker-js/faker'
import _ from 'lodash'

describe('Expert', () => {
    beforeEach(() => {
        cy.start()
    })

    it('Deve manipular os atributos de elementos do HTML', () => {
        cy.log('todo')

        cy.get('#email').invoke('val', 'papi@teste.com.br')

        cy.get('#password').invoke('attr', 'type', 'text')

        cy.contains('button', 'Entrar').invoke('hide').should('not.be.visible')

        cy.contains('button', 'Entrar').invoke('show').should('be.visible')
    })

    it('Não deve logar com senha inválida', () => {
        cy.submitLoginForm('papito@webdojo.com', 'katana321')

        cy.wait(2500)

        cy.document().then((doc) => {
            cy.writeFile('cypress/downloads/page.html', doc.documentElement.outerHTML)
        }) //salva o html da página no arquivo page.html

        cy.get('[data-sonner-toaster=true] .title')
            .should('be.visible')
            .as('toast')

        cy.get('@toast')
            .should('be.visible')
            .should('have.text', 'Acesso negado! Tente novamente.')

        cy.wait(5000)

        cy.get('@toast')
            .should('not.exist')
    })

    it('Simulando a tecla TAB com cy.press', () => {
        cy.get('body').press('Tab')
        cy.focused().should('have.attr', 'id', 'email')

        cy.get('#email').press('Tab')
        cy.focused().should('have.attr', 'id', 'password')
    })

    it.only('Deve realizar uma carga de dados fakes', () => {


    })
})