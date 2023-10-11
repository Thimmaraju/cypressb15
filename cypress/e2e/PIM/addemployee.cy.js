import login from "../../pageobjects/loginpage.po"
import dashboard from '../../pageobjects/dashbaordpage.po'
import addemployee from "../../pageobjects/pim/addemployee.po"
import addemployeedata from '../../fixtures/createemployee.json'

describe('Verify add employee functionality', () => {

    it('Verify add employee with valid details', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get(login.userNameInput()).type(Cypress.env("username"))
        cy.get(login.passwordInput()).type(Cypress.env("password"))
        cy.get(login.loginBtn()).click()
        //Assertions 

        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        //or

        cy.url().should('include', 'web/index.php/dashboard/index')

        //or

        cy.contains(dashboard.dashboardmenuitem()).should('be.visible')

        cy.contains(dashboard.pimMenuItem).click()

        addemployee.createEmployee(addemployeedata.firstname, addemployeedata.lastname)


    })


})