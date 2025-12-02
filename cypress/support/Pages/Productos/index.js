const el = require('./elements').ELEMENTS
class headerSecondaryContainer {
   
 validarheaderSecondaryContainer(){
    cy.get(el.headerSecondaryContainer).should('be.visible')
 }
 

}
export default new headerSecondaryContainer()