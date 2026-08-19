Cypress.Commands.add('fillConsultancyForm', (form) => {

    cy.get('#name').type(form.name)
    cy.get('#email').type(form.email)
    cy.get('input[placeholder="(00) 00000-0000"]').type(form.phone)
        .should('have.value', form.phone)

    cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .select(form.consultancyType)


    if (form.personType === 'cpf') {

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
            .type(form.document)

    }

    if (form.personType === 'cnpj') {

        cy.contains('span', 'Pessoa Jurídica')
            .parent()
            .find('input')
            .check()

        cy.contains('span', 'Pessoa Física')
            .parent()
            .find('input')
            .should('not.be.checked')

        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(form.document)
    }



    form.discoveryChannels.forEach((channel) => {
        cy.contains('span', channel)
            .parent()
            .find('input[type="checkbox"]')
            .check()
            .should('be.checked')
    })

    cy.get('input[type="file"]')
        .selectFile(form.file, { force: true }) // força o upload do arquivo mesmo que o input esteja escondido


    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]').type(form.description)

    form.techs.forEach((tech) => {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(tech)
            .type('{enter}')

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)
            .should('be.visible') // verifica se a tecnologia adicionada está visível na lista de tecnologias   
    })


    if (form.termsAccepted === true) {

        cy.contains('label', 'termos de uso')
            .find('input')
            .check()

    }


})

Cypress.Commands.add('submitConsultancyForm', () => {

    cy.contains('button', 'Enviar formulário')
        .click()
})

Cypress.Commands.add('validaceConsultancyModal', () => {

    cy.get('.modal', { timeout: 7000 }) // espera até 10 segundos para o modal aparecer
        .should('be.visible')
        .find('.modal-content')
        .should('be.visible')
        .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
})