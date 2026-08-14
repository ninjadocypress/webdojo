describe('DELETE /api/users/:id', () => {

    context('Excluir usuário', () => {
        let userId

        const originalUser = {
            name: 'Professor Girafales',
            email: 'girafales@exemple.com',
            password: 'password123'
        }

        before(() => {

            cy.task('deleteUser', originalUser.email)

            cy.postUser(originalUser).then(response => {
                userId = response.body.user.id
                cy.log(userId)
            })
        })

        it('Deve Excluir um usuário existente', () => {
            cy.deleteUser(userId).then((response) => {
                expect(response.status).to.eq(204)
            })
        })

        after(() => {
            cy.getUser().then((response) => {
                const hulk = response.body.find((user) => user.id === userId)
                expect(hulk).to.be.undefined
            })
        })
    })

    context('Quando o ID não existe', () => {
        let userId

        const originalUser = {
            name: 'Dona Neves',
            email: 'neves@exemple.com',
            password: 'password123'
        }

        before(() => {

            cy.task('deleteUser', originalUser.email)

            cy.postUser(originalUser).then(response => {
                userId = response.body.user.id
                cy.log(userId)
            })

            cy.task('deleteUser', originalUser.email)
        })

        it('Deve retornar 404 e user not found', () => {
            cy.deleteUser(userId).then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body.error).to.eq('User not found.')
            })
        })
    })
})


