//import { before } from 'mocha'
import Login from "../support/Pages/Login"
//import Productos from "../support/Pages/Productos"
import headerSecondaryContainer from "../support/Pages/Productos"

describe('Realizar Login', () => {
    beforeEach(() => { 
        Login.acessarURL()
    })

    it('Login exitoso', () => {
        Login.acessarURL()
        Login.preencherUsername('standard_user')
        Login.preencherPassword('secret_sauce')
        Login.clicarEnLogin()
        headerSecondaryContainer.validarheaderSecondaryContainer()
    })

    it('Login fallido - Ingrese password', () => {
        Login.acessarURL()
        Login.preencherUsername('standard_user')
        //Login.preencherPassword('secret_sauce')
        Login.clicarEnLogin()
        //COMENTARIO: ambos "validarMenajeDeError" y "validarConContenido" validan el login sin password
        //Login.validarMenajeDeError('Epic sadface: Password is required')
        Login.validarConContenido('Password is required')

    })

     it('Login fallido - Ingrese usuario', () => {
        Login.acessarURL()
        //Login.preencherUsername('standard_user')
        Login.preencherPassword('secret_sauce')
        Login.clicarEnLogin()
        //COMENTARIO: ambos "validarMenajeDeError" y "validarConContenido" validan el login sin password
        Login.validarMenajeDeError('Epic sadface: Username is required')
        //Login.validarConContenido('Username is required')

    })
})