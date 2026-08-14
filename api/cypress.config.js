const { defineConfig } = require("cypress");

const {deleteUserByEmail} = require('./cypress/support/database') 
//importando a função deleteUserByEmail do arquivo database.js para ser usada na configuração do Cypress

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        deleteUser: (email) => {
          return deleteUserByEmail(email)
        }
      })
    },
    baseUrl: 'http://localhost:3333',
  },
});
