const el = require('./elemts').ELEMENTS
class Login {

    acessarURL(){
        cy.visit(el.url)
        cy.contains('Swag Labs').should('be.visible')
    }

    preencherUsername(username){
        cy.get(el.campoUsername).type(username)
    }    

    preencherPassword(password){
        cy.get(el.campoPassword).type(password)
    }

    clicarEnLogin(){
        cy.get(el.botonLogin).click()
    }

    //validarLogincomSucesso(){
        //cy.get(el.msgError).should
    //}

    validarMenajeDeError(msgError){
        cy.get(el.msgError).should('have.text', msgError)
    }

    validarConContenido(msgError){
        cy.contains(msgError).should('be.visible')
    }
}
export default new Login()