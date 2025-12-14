/// <reference types="cypress" />

describe('Login,',() => {
    it('Debera realizar  el registro en la pagina de Fortesza', () =>{
        cy.viewport(1920,1080)
        cy.visit("https://staging.fortesza.com/register")

        cy.get('#input-email-register').type('omarsteve0703@gmail.com')
        cy.get('#mat-input-2').type('+573125668796')
        cy.get('#input-password-register').type('esFortesza21*')
        cy.xpath('/html/body/app-root/app-register/div[3]/mat-card/mat-card-content/form/div[1]/div[1]/mat-checkbox/label/span[1]').click()
        cy.contains(' Crear cuenta ').click()
    


    })
})
