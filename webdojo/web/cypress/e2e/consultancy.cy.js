import { personal, company } from '../fixtures/consultancy.json'


describe('Formulário de Consultoria', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    })

    it('Deve solicitar consultoria individual', () => {
        cy.fillConsultancyForm(personal)
        cy.submitConsultancyForm()
        cy.validaceConsultancyModal()
    })


    it('Deve solicitar consultoria individual In Company', () => {
        cy.fillConsultancyForm(company)
        cy.submitConsultancyForm()
        cy.validaceConsultancyModal()
    })

    it('Deve verificar os campos obrigatórios', () => {
        cy.submitConsultancyForm()

        cy.contains('label', 'Nome Completo *')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')

        cy.contains('label', 'Email *')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Campo obrigatório')



        cy.contains('label', 'termos de uso')
            .parent()
            .find('p')
            .should('be.visible')
            .should('have.text', 'Você precisa aceitar os termos de uso')
    })
})











//cy.get('#consultancyType').select('In Company')
// É uma forma de localizar o select, a partir do label que está associado a ele. A partir do label, subimos para o elemento pai e depois buscamos o select dentro dele. Nesse caso usamos tag html label pois nao tem id definido para o select, mas tem um label associado a ele. Então podemos localizar o select a partir do label que está associado a ele.


//cy.get('input[placeholder="000.000.000-00"]').type('613.158.713-27')
//    .should('have.value', '613.158.713-27') // verifica se o valor digitado no campo de CPF está correto