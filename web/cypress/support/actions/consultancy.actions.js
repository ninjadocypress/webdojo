Cypress.Commands.add('fillConsultancyForm', (form) => {
    cy.get('input[placeholder="Digite seu nome completo"]')
        .type(form.name)

    cy.get('input[placeholder="Digite seu email"]')
        .type(form.email)

    cy.get('input[placeholder="(00) 00000-0000"]')
        .type(form.phone)
    //.should('have.value', '(21) 99999-1000')

    // //label[text()="Tipo de Consultoria"]/..//select   *exemplo usando Xpath
    cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .select(form.consultanceType)

    // //span[text()="Pessoa Física"]/..//input
    if (form.personType === 'cpf') {
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(form.document)
        //.should('have.value', '705.213.120-00')
    }

    if (form.personType === 'cnpj') {
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('be.not.checked')

        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(form.document)
    }


    form.discoveryChannels.forEach((channel) => {
        cy.contains('label', channel)
            .find('input')
            .check()
            .should('be.checked')
    })

    cy.get('input[type="file"]')
        .selectFile(form.file, { force: true }) //O elemento está usando uma class="hidden" para facilitar a estilização do elemento apartir da div pai, já que o input do tipo file é ruim de estilizar. Logo, apesar do Cypress encontrar o elemento, ele entende que não deve interagir, pois está hidden. Por isso usamos o force: true

    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type(form.description)

    form.techs.forEach((tech) => {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(tech)
            .type('{enter}')

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)
            .should('be.visible')
    })

    if (form.terms === true) {
        cy.contains('label', 'termos de uso')
            .find('input')
            .check()
    }
})

Cypress.Commands.add('submitConsultancyForm', () => {
    cy.contains('button', 'Enviar formulário')
        .click()
})

Cypress.Commands.add('validateConsultancyModal', () => {
    cy.get('.modal', { timeout: 7000 })
        .should('be.visible')
        .find('.modal-content')
        .should('be.visible')
        .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
})