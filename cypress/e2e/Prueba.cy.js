describe('Prueba - Formulario', () => {
  it('Completar los campos exitosamente', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#name').type('Juan Perez')
    cy.get('input[placeholder="Enter EMail"]').type('JuanPerez@gmail.com')
    cy.get('#phone').type('92463330')
  })
  })
