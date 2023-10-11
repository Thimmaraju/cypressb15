
import login from "../pageobjects/loginpage.po"
import dashboard from "../pageobjects/dashbaordpage.po"
import addemployee from "../pageobjects/pim/addemployee.po"

const availablefixtures = [
    {
        "name": "PIMData/addemployees/employee1",
        "context": "Raju"
    },
    {
        "name": "PIMData/addemployees/employee2",
        "context": "pavan"
    },
    {
        "name": "PIMData/addemployees/employee3",
        "context": "poornima"
    }
]


describe('Automation Test Suite - create employees', function(){
    //loop through both the fixtues 
    availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {
            //Mostly used for Setup Part
            before(function () {
                cy.fixture(afixture.name).then(function (data) {
                    this.data = data;
                })
            })

            it('Cypress Test Case - add employee', function () {
               
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

                cy.xpath(login.userNameInput()).type(Cypress.env("username"))
                cy.get(login.passwordInput()).type(Cypress.env("password"))
                cy.get(login.loginBtn()).click()
                //Assertions 
        
                cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        
                //or
        
                cy.url().should('include', 'web/index.php/dashboard/index')
        
                //or
        
                cy.contains(dashboard.dashboardmenuitem()).should('be.visible')
        
                cy.contains(dashboard.pimMenuItem).click()
       
                addemployee.createEmployee(this.data.firstname, this.data.lastname)
        
        
            })

        })
    })
})

