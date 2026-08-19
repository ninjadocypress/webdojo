describe('Validacoes de Alertas em JavaScripit', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })

    it('Deve validar a mensagem de alerta', () => {

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })
        cy.contains('button', 'Mostrar Alert').click()

    })

    it('Deve confirmar um diálogo e confirmar a resposta positiva', () => {
        cy.on('window.confirm', (msg) => {
            expect(msg).to.equal('Aperta um botão!')
            return true; // simula o click no botao OK 
        })

        cy.on('window.confirm', (msg) => {
            expect(msg).to.equal('Você clicou em Ok!')
        })
    })

    it('Deve cancelar um diálogo e confirmar a resposta negativa', () => {
        cy.on('window.confirm', (msg) => {
            expect(msg).to.equal('Aperta um botão!')
            return false; // simula o click no botao Cancelar 
        })

        cy.on('window.confirm', (msg) => {
            expect(msg).to.equal('Você cancelou!')
        })
    })

    it('Deve interagir com um pronpt, inserir um texto e validar uma mensagem', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Débora')
        })

        cy.on('window.confirm', (msg) => {
            expect(msg).to.equal('Olá Débora! Boas vindas ao WebDojo!')
        })
        cy.contains('button', 'Mostrar Prompt').click()
    })

})