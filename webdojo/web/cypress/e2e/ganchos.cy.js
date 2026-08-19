describe('Formulário de Consultoria', () => {


    before(() => {

        cy.log('Isso acontece antes de todos os testes uma única vez')
    })

    beforeEach(() => {
        cy.login()

        cy.goTo('Formulários', 'Consultoria')



    })

    it('Deve solicitar consultoria individual', () => {

        cy.get('#name').type('Débora Barbosa')
        //cy.get('input[placeholder="Digite seu nome completo"]').type('Débora Barbosa') -> uso de placeholder como localizador para casos que nao venham com o id definido

        cy.get('#email').type('deborabarbosapinheiro5@gmail.com')
        cy.get('input[placeholder="(00) 00000-0000"]').type('(85) 99793-1499')
            .should('have.value', '(85) 99793-1499') // verifica se o valor digitado no campo de telefone está correto


        //cy.get('#consultancyType').select('In Company')


        // É uma forma de localizar o select, a partir do label que está associado a ele. A partir do label, subimos para o elemento pai e depois buscamos o select dentro dele. Nesse caso usamos tag html label pois nao tem id definido para o select, mas tem um label associado a ele. Então podemos localizar o select a partir do label que está associado a ele.
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('In Company')

        // //span[text()="Pessoa Física"]/ ../input xpath
        cy.contains('span', 'Pessoa Física')
            .parent()
            .find('input')
            .check()

        cy.contains('span', 'Pessoa Jurídica')
            .parent()
            .find('input')
            .should('not.be.checked') // verifica se o radio button nao está selecionado

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('613.158.713-27')
            .should('have.value', '613.158.713-27') // verifica se o valor digitado no campo de CPF está correto


        //cy.get('input[placeholder="000.000.000-00"]').type('613.158.713-27')
        //    .should('have.value', '613.158.713-27') // verifica se o valor digitado no campo de CPF está correto


        const disconveryChannels = ['Instagram', 'LinkedIn', 'Udemy', 'YouTube', 'Indicação de Amigo']

        disconveryChannels.forEach((channel) => {
            cy.contains('span', channel)
                .parent()
                .find('input[type="checkbox"]')
                .check()
                .should('be.checked')
        })

        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/document.pdf', { force: true }) // força o upload do arquivo mesmo que o input esteja escondido


        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore')

        const techs = ['Cypress', 'JavaScript', 'HTML', 'CSS']

        techs.forEach((tech) => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible') // verifica se a tecnologia adicionada está visível na lista de tecnologias   
        })

        cy.contains('label', 'termos de uso')
            .find('input')
            .check()

        cy.contains('button', 'Enviar formulário')
            .click()


        cy.get('.modal', { timeout: 7000 }) // espera até 10 segundos para o modal aparecer
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
    })

    it('Deve verificar os campos obrigatórios', () => {

        cy.contains('button', 'Enviar formulário')
            .click()


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

afterEach(() => {

    cy.log('Finalizando o teste de consultoria')
}) // Pode usar em um doblecheck

after(() => {

        cy.log('Isso acontece depois de todos os testes uma única vez')
    })

})

