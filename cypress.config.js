const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
  
    "specPattern": "**/*.feature",
    "projectId": "o9asqr",
    "excludeSpecPattern": "cypress/e2e/cypresshooks.cy.js",
    "video":true,
    "videoCompression": 0,
    "videosFolder": "cypress/Girish",
    "baseUrl" : "https://opensource-demo.orangehrmlive.com",
     "viewportWidth":1920,
     "viewportHeight": 1080,
    "defaultCommandTimeout": 20000,
    "pageLoadTimeout": 120000,
    "retries":{
      "openMode": 1,
      "runMode": 1
      
    },
    env:{
        
      "username" : "Admin",
      "password": "admin123",
      "clienturl": "https://opensource-demo.orangehrmlive.com"

    },

    setupNodeEvents(on, config) {

      return require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
