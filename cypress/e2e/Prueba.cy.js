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

  //flujo que permite marcar solo los checkbox cuyo valor inicie con la letra "s"
  it('Seleccionar elemento tipo checkbox', () =>{
    cy.viewport('ipad-mini','landscape') //configura la vista como si fuera un ipad mini pero solo de esta escenario
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('input[type="checkbox"][class="form-check-input"]').each(($check)=>{ //llama a todos los checkbox [checkbox1, checkbox2, checkbox3....]
       const valueText = $check.attr('value')
        if(valueText.startsWith('s')) { //marcara solo los checkbox cuyo valor inicie con la letra "s"
          cy.wrap($check).check()
         //$check.check()
        }
    })
   
  })

//flujo abre una nueva pestaña al presionar el boton "new tab"
  it('Enlaces que abre una nueva pestaña', () =>{ 
    cy.visit('https://testautomationpractice.blogspot.com/')
     cy.get('button[onclick="myFunction()"]').click()
     //cy.get('button[onclick="myFunction()"]').invoke('removeAttr','onclick').click() //quita el atributo que abre una nueva pestaña 
  })

})
