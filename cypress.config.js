const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ezvh4z',
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    specPattern: "cypress/e2e/*.cy.js",
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
    },
  },
});
