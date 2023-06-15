const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1440,
  viewportHeight: 900,
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  waitForAnimations: true,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config = cypressBrowserPermissionsPlugin(on, config)
    },
  },
  env: {
    'browserPermissions': {
      'geolocation': 'allow',
    }
  }
});
