describe('POST /api/users/register', () => {

  it('Deve cadastrar um novo usuário', () => {

    const user = {
      name: 'chaves',
      email: 'chaves@example.com',
      password: 'password123'
    }

    cy.task('deleteUser', user.email)

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.message).to.eq('User successfully registered!')
      expect(response.body.user.id).to.match(/^-?\d+$/)
      expect(response.body.user.name).to.eq(user.name)
      expect(response.body.user.email).to.eq(user.email)
    })
  })

  it('Não deve cadasatrar um email já existente', () => {

    const user = {
      name: 'nhonho',
      email: 'nhonho@example.com',
      password: 'password123'
    }

    cy.task('deleteUser', user.email)

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(201)
    })

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(409)
      expect(response.body.error).to.eq('Email already exists!')
    })
  })

  it('Informar formato invalido', () => {

    const user = `{
      name: 'chapolim',
      email: 'chapolim@example.com'
      password: 'password123'
    }`

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Invalid JSON format')
    })
  })

  it('O campo name deve ser obrigatório', () => {

    const user = {
      email: 'kiko@exemplo.com',
      password: 'password123'
    }

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Name is required!')
    })
  })

  it('O campo email deve ser obrigatório', () => {

    const user = {
      name: 'kiko',
      password: 'password123'
    }

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Email is required!')
    })
  })

  it('O campo senha deve ser obrigatório', () => {

    const user = {
      name: 'chiquinha',
      email: 'chiquinha@example.com'
    }

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq('Password is required!')
    })
  })
})