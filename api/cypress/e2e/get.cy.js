describe('GET /api/users', () => {

    const heroes = [
        {
            name: 'Bob Esponja',
            email: 'bob.esponja@fenda.com',
            password: 'password123'
        },
        {
            name: 'Patrick Estrela',
            email: 'patrick.estrela@fenda.com',
            password: 'password123'
        },
        {
            name: 'Lula Molusco',
            email: 'lula.molusco@fenda.com',
            password: 'password123'
        },
        {
            name: 'Seu Siriguejo',
            email: 'seu.siriguejo@fenda.com',
            password: 'password123'
        },
        {
            name: 'Sandy Bochechas',
            email: 'sandy.bochechas@fenda.com',
            password: 'password123'
        }
    ]

    before(() => {
        heroes.forEach((hero) => {
            cy.postUser(hero)
        })
    })

    it('Deve retornar uma lista de usuários', () => {
        cy.getUser().then((response) => {
            expect(response.status).to.eq(200)

            heroes.forEach((hero) => {
                const found = response.body.find((user) => user.email === hero.email)
                expect(found.name).to.eq(hero.name)
                expect(found.email).to.eq(hero.email)
                expect(found).to.have.property('id').that.is.a('number')
            })
        })
    })
})