const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    experimentalStudio: true,
    video: false,
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1440,
    viewportHeight: 900
  },
});

  