const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    experimentalStudio: true,  
    supportFile: 'cypress/support/e2e.js', 
  },
});
