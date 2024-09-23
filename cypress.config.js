const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',
    experimentalRunAllSpecs: true,
    specPattern: 'cypress/e2e/allTestsSpec.cy.js'
  }
});
