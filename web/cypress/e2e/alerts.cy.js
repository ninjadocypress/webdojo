describe('Validações de Alertas em JavaScript', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })
    it('Deve validar a mensagem de alerta', () => {

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })
        cy.contains('Button', 'Mostrar Alert').click()
    })
    it('Deve confirmar um diálogo e validar a resposta positiva', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return true; //true simula um click no botão OK
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você clicou em Ok!')
        })

        cy.contains('button', 'Mostrar Confirm').click()

    })
    it('Deve cancelar um diálogo e validar a resposta negativa', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return false; // false simula um click em cancelar
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você cancelou!')
        })
        cy.contains('button', 'Mostrar Confirm').click()
    })
    it('Deve interagir com o prompt, inserir um texto e validar uma msg', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Renan')
        })
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá Renan! Boas-vindas ao WebDojo!')
        })
        cy.contains('button', 'Mostrar Prompt').click()
    })
})