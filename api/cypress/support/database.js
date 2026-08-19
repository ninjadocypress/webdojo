const pgp = require('pg-promise')() //importando a biblioteca pg-promise para interagir com o banco de dados PostgreSQL

const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'UserDB',
    user: 'dba',
    password: 'dba'
}) //criando uma conexão com o banco de dados PostgreSQL usando as credenciais fornecidas

function deleteUserByEmail(email) {
    return db.none('DELETE FROM public."User" WHERE email = $1', [email])
}

module.exports = {
    deleteUserByEmail
}