describe('Validações de Alertas em JavaScript', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })

    it('Deve validar a mensagem de alerta', () => {
        //cy.on() é um listener
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })

        cy.contains('button', 'Mostrar Alert').click()
    })

    it('Deve confirmar um diálogo e validar a resposta positiva', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return true; // True simula o click no botão OK
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você clicou em Ok!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('Deve cancelar um diálogo e validar a resposta negativa', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return false; // False simula o click no botão Cancelar
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você cancelou!')
        })

        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('Deve interagir com um prompt, inserir um texto e validar uma mensagem', () => {
        //função window acessa a janela do navegador. Chamamos a subfunção then, que é um callback, passando como argumento 'win' para termos acesso ao objeto da janela do navegador.
        //stub simula o comportamento do prompt, para isso passamos o objeto win e especificamos a função que queremos simular
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Daniel')
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá Daniel! Boas-vindas ao WebDojo!')
        })

        cy.contains('button', 'Mostrar Prompt').click()

    })
})