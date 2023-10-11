import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import login from '../../pageobjects/loginpage.po'

Given('User Launch the Application', () => {

    cy.visit("/web/index.php/auth/login")

})


When('User Enter username as {string}', (username) => {

    //cy.get('input[name="username"]').type(username)

    cy.xpath(login.userNameInput()).type(username)

})


When('User Enter password as {string}', (password) => {

    cy.get(login.passwordInput()).type(password)

})


And('User clicks on the login button', () => {

    cy.get(login.loginBtn()).click()

})

And('User should be navigated to Dashboard Page', () => {

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.contains("Dashboard").should("be.visible")
})



And('User should get error Message', () => {

    cy.contains(login.loginErrorMessage()).should('be.visible')
})