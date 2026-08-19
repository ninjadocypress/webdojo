describe('PUT /api/users/:id', () => {

    context('Atualizar usuário', () => {
        let userId

    const originalUser = {
        name: 'kiko',
        email: 'kiko@exemple.com',
        password: 'password123'
    }

    const updateUser = {
        name: 'chaves',
        email: 'chaves.updated@exemple.com',
        password: 'password123'
    }

    before(() => {

        cy.task('deleteUser', updateUser.email)
        cy.task('deleteUser', originalUser.email)

        cy.postUser(originalUser).then(response => {
            userId = response.body.user.id
            cy.log(userId)
        })
    })

    it('Deve atualizar um usuário existente', () => {
        cy.putUser(userId, updateUser).then((response) => {
            expect(response.status).to.eq(204)
        })
    })

    after(() => {
                cy.getUser().then((response) => {
                    const found = response.body.find((user) => user.email === updateUser.email)
                    expect(found.name).to.eq(updateUser.name)
                    expect(found.email).to.eq(updateUser.email)
                    expect(found).to.have.property('id').that.is.a('number')
                })
            })
})

    context('Campos obrigatórios', () => {
        it('Informar formato invalido', () => {

            const user = `{
            name: 'chapolim',
            email: 'chapolim@example.com'
            password: 'password123'
         }`

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Invalid JSON format')
            })
        })

        it('O campo name deve ser obrigatório', () => {

            const user = {
                email: 'kiko@exemplo.com',
                password: 'password123'
            }

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Name is required!')
            })
        })

        it('O campo email deve ser obrigatório', () => {

            const user = {
                name: 'kiko',
                password: 'password123'
            }

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Email is required!')
            })
        })

        it('O campo senha deve ser obrigatório', () => {

            const user = {
                name: 'chiquinha',
                email: 'chiquinha@example.com'
            }

            cy.putUser(1, user).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.error).to.eq('Password is required!')
            })
        })
    })
    context('Quando o ID não existe', () => {
        let userId

        const originalUser = {
            name: 'Jaiminho',
            email: 'jaiminho@exemple.com',
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
            cy.putUser(userId, originalUser).then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body.error).to.eq('User not found.')
            })
        })
    })
})   
