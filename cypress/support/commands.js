// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Comando .add sirve para agregar o crear nuevos comandos personalizados
Cypress.Commands.add('realizarLogin', (user, password) => { 
    cy.get('#user-name').type(user)
    cy.get('#password').type(password)
    cy.get('#login-button').click()

 })

Cypress.Commands.add('validarCSS', (selector, atributo, valor) => { 
    cy.get(selector).should('have.css', atributo, valor)
 })

Cypress.Commands.add('infoDestinatario', (firstName, lastName, zipCode) => { 
    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#postal-code').type(zipCode)
 })

 // -- This will overwrite an existing command --
 //Comando .overwrite sirve para sobrescribir comandos existentes
//Cypress.Commands.overwrite('visit', (url, validarConContenido) => {
  //  cy.visit(url)
  //  cy.url().should('contain', validarConContenido)
// })

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
