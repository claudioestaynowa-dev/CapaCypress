/// <reference types="cypress" />
//import { before } from 'mocha'
import Login from "../support/Pages/Login"
//import Productos from "../support/Pages/Productos"
import headerSecondaryContainer from "../support/Pages/Productos"
import {createDestinatario} from "../support/Factories/destinatario.js"

//describe('Realizar Login', () => {
describe('Realizar Login', function() {
    const credenciaisObj ={
        standard: 'standard_user',
        locked: 'locked_out_user',
        password: 'secret_sauce'
    }

       //beforeEach(() => { 
    before(function(){ 
         cy.fixture('credencialesFixture').then((dados) => {
         this.credenciaisExt = dados
        })   
    })

        //beforeEach(() { 
        beforeEach(function(){ 
            Login.acessarURL('/')
           cy.url().should('include', 'saucedemo') //Usando el baseUrl del cypress.config.js
        })



    //it('Login exitoso',() => {
    it('Login exitoso',function(){
        Login.acessarURL()
        //Login.preencherUsername(this.credenciaisExt.users.standard)
        //Login.preencherPassword(this.credenciaisExt.passwords.passwords_valido)
        //Login.clicarEnLogin()
        cy.realizarLogin(this.credenciaisExt.users.standard, this.credenciaisExt.passwords.passwords_valido) //Usando el comando personalizado "realizarLogin"
        headerSecondaryContainer.validarheaderSecondaryContainer()
    })

    //it('Login fallido - Ingrese password', () => {
    it('Login fallido - Ingrese password', function(){
        Login.acessarURL()
        Login.preencherUsername(credenciaisObj.standard)
        Login.clicarEnLogin()
        //COMENTARIO: ambos "validarMenajeDeError" y "validarConContenido" validan el login sin password
        //Login.validarMenajeDeError('Epic sadface: Password is required')
        Login.validarConContenido('Password is required')

    })

    //it('Login fallido - Ingrese usuario', () => {
    it('Login fallido - Ingrese usuario', function(){
        Login.acessarURL()
        Login.preencherPassword(credenciaisObj.password)
        Login.clicarEnLogin()
        //COMENTARIO: ambos "validarMenajeDeError" y "validarConContenido" validan el login sin password
        Login.validarMenajeDeError('Epic sadface: Username is required')
        //Login.validarConContenido('Username is required')
    })

    const destinatarioFaker = createDestinatario()

    it.only('Realizar compra exitosa', function(){
        Login.acessarURL()
        Login.preencherUsername(this.credenciaisExt.users.standard)
        Login.preencherPassword(this.credenciaisExt.passwords.passwords_valido)
        Login.clicarEnLogin()
        headerSecondaryContainer.validarheaderSecondaryContainer()

        //COMENTARIO: clicar en el primer producto
        //cy.get('button[class="btn btn_primary btn_small btn_inventory "]').first().click() 

        //COMENTARIO: clicar en un producto aleatorio
        let elIndex = Cypress._.random(0, 5)
        cy.log(`El indice aleatorio es: ${elIndex}`)

        //FORMA 1 DE HACERLO (clicar en un producto aleatorio)
        cy.get('button[class="btn btn_primary btn_small btn_inventory "]').each(($btn, index)=>{
            if(index == elIndex){
                cy.wrap($btn).click()
            }

        })

        //FORMA 2 DE HACERLO (clicar en un producto aleatorio)
        //cy.get('button[class="btn btn_primary btn_small btn_inventory "]').eq(elIndex).click()

        //clicar en el carrito
        cy.get('a[class="shopping_cart_link"]').click()
        cy.validarCSS('span[class="title"]', 'color', 'rgb(19, 35, 34)') //COMENTARIO: Usando el comando personalizado "validarCSS"
        cy.validarCSS('button[class="btn btn_action btn_medium checkout_button "]', 'background-color', 'rgb(61, 220, 145)') //COMENTARIO: Usando el comando personalizado "validarCSS"
        //cy.get('span[class="title"]').should('have.css', 'color', 'rgb(19, 35, 34)')
        //cy.get('button[class="btn btn_action btn_medium checkout_button "]').should('have.css','background-color', 'rgb(61, 220, 145)' )
        cy.get('button[class="btn btn_action btn_medium checkout_button "]').click()
        //llenar informacion del destinatario
        cy.infoDestinatario(destinatarioFaker.firstName, destinatarioFaker.lastName, destinatarioFaker.zipCode) //COMENTARIO: Usando el comando personalizado "infoDestinatario"
        //cy.get('#first-name').type(destinatarioFaker.firstName)
        //cy.get('#last-name').type(destinatarioFaker.lastName)
        //cy.get('#postal-code').type(destinatarioFaker.zipCode)
        cy.get('input[class="submit-button btn btn_primary cart_button btn_action"]').click()
        cy.get('button[class="btn btn_action btn_medium cart_button"]').click()
        cy.get('h2[class="complete-header"]').should('have.text', 'Thank you for your order!')
    })

})