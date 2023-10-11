import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import addemployee from '../../pageobjects/pim/addemployee.po'

And('User clicks on PIM Module', () => {

    cy.contains("PIM").click()
})

And('User clicks on Add employee sub menu item', () => {

    cy.contains('Add Employee').click()
})

And('User Enter firstname as {string}', (firstname) => {

    cy.get(addemployee.firstNameInput()).type(firstname)

})


And('User Enter lastname as {string}', (lastname) => {

    cy.get(addemployee.lastNameInput()).type(lastname)

})

And('User clicks on the save button', () => {

    cy.get(addemployee.saveBtn()).click()
})

Then('User should get message successfully Saved', () => {

    cy.contains(addemployee.successMessage()).should('be.visible')
})