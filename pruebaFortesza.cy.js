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
describe.only('Login Fortesza',() => {
    it('Deberar iniciar secion en la pagina de fortesza y realizar interacciones ', () =>{
        cy.viewport(1920,1080)
        cy.visit('https://staging.fortesza.com/')
        cy.contains('Iniciar Sesión').click()

        cy.get('#txt-email-or-user').type('omarsteve0703@gmail.com')
        cy.get('#txt-password').type('esFortesza21*')
        cy.get('#btn-sign-in-page').click()
        cy.wait(4000)

        cy.get('#dropdown-trigger.dropbtn').click()
        cy.contains('Mi perfil').click()
        cy.xpath('/html/body/app-root/ion-app/ion-popover/div/ion-content/ion-list/ion-accordion-group/ion-accordion/ion-list/ion-item/ion-label').click()
        cy.contains('Editar').click()
        cy.get('#ion-input-3[name="ion-input-3"]').clear()
        .should('be.visible')
        .click().type('3001234567')
        cy.wait(500)
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-tabs/ion-tabs/div/ion-router-outlet/app-update-data/ion-content/ion-grid/ion-row/ion-col/div/form/div[2]/ion-button[2]').click()
        cy.contains('Finalizar').click()


        cy.contains('No Verificado').click()
        cy.contains('Reenviar correo').click()
        cy.contains('Finalizar').click()

        cy.get('#ion-input-0[name="ion-input-0"]').type('esFortesza21*')

        cy.get('#ion-input-1[name="ion-input-1"]').type('esFortesza22*')
        
        cy.get('#ion-input-2[name="ion-input-2"][type="password"]').type('esFortesza22*')
        cy.wait(1500)

        cy.get('#ion-input-1[name="ion-input-1"]').type('forteza')


       cy.get('#ion-input-1[name="ion-input-1"]').next().click()

       cy.get('#dropdown-trigger.dropbtn').click()
       cy.contains('Cerrar sesión').click()
    })
})
