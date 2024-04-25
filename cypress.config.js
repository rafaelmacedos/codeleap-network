const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://codeleap-frontend-test.netlify.app/',
    setupNodeEvents(on, config) {
    },
  },
  
});
