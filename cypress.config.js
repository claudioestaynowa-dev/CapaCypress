const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    viewportWidth: 1000,
    viewportHeight: 450, //tamaño de la ventana del navegador a nivel de toda nuestra prueba
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
