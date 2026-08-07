const { defineConfig } = require("cypress");
const { readPdf } = require('./cypress/support/helper.js')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readPdf
      })
      // implement node event listeners here
    },
    experimentalStudio:true,
    video:false,
    baseUrl: 'http://localhost:3000'
  },
});
