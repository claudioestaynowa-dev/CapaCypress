/// <reference types="cypress" />

describe('Prueba - Formulario', () => {
  it('Completar los campos exitosamente', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.contains('Automation Testing Practice').should('be.visible')
    cy.get('#name').type('Juan Perez')
    cy.get('input[placeholder="Enter EMail"]').type('JuanPerez@gmail.com')
    cy.get('#phone').type('92463330')
    cy.get('input[value="male"]').click()
    cy.get('input[type="checkbox"]').check('sunday')
    cy.get('#country').select('Germany')
    cy.get('#colors').select('Green')
    cy.get('#animals').select('Dog')
    cy.get('#datepicker').click('')
    cy.get('a[data-date="22"]').click()
    cy.get('#datepicker').should('have.value', '11/22/2025')
    cy.get('#singleFileInput').selectFile('cypress\\fixtures\\images.png')
    cy.get('#singleFileInput').should('have.value', 'C:\\fakepath\\cypress\\fixtures\\images.png')
    
  })
  it('Validar boton enter', () =>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('button[name="start"]').click()
    cy.get('button[name="stop"]').should('be.visible')
    cy.contains('STOP').should('be.visible')
    cy.contains('button','STOP').click()
  }) 
  })
