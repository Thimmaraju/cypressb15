// import logindata from '../../fixtures/login.json'

// import login from '../../pageobjects/loginpage.po'

// describe("Verify Login functionality", () => {

//     var username = "Admin"
//     var password = "admin123"

   

//     it.only('Verify Login with Valid creds', () => {
//         let creds = {

//             username: "Admin",
//             password: "admin123"
//         }
//         var menuitems = {

//             menu1 : "Admin",
//             menu2 : "PIM",
//             menu3 : "Leave",
//             menu4 : "Time",
//             menu5 : "Recruitment",
//             menu6 : "Dashboard"
        
//         }


//         var modules = ["Admin", "PIM","Leave", "Time","Recruitment", "Dashboard"]
//         cy.visit(Cypress.env("clienturl"))

//         cy.xpath(login.userNameInput()).type(logindata.username)
//         cy.get(login.passwordInput()).type(logindata.password)
//         cy.get(login.loginBtn()).click()
//         //Assertions 

//         cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

//         //or

//         cy.url().should('include', 'web/index.php/dashboard/index')

//         //or
//     //    for (let item in menuitems){

//     //     cy.contains(menuitems[item]).should('be.visible')
//     //    }
     
//         for (let i of modules){

//             cy.contains(i).should('be.visible')
//         }


//     })

//     it.only('Verify login with valid username and Invalid Password', () => {
        
//         cy.visit("/")

//         cy.xpath(login.userNameInput()).type("Admin")
//         cy.get(login.passwordInput()).type("fvjdhbfj")
//         cy.get(login.loginBtn()).click()

//         cy.contains('Invalid credentials').should('be.visible')


//     })

//     it.only('Verify login with invalid username and valid Password', () => {
        

//         cy.visit("/web/index.php/auth/login")

//         cy.xpath(login.userNameInput()).type("fudbfw")
//         cy.get(login.passwordInput()).type("admin123")
//         cy.get(login.loginBtn()).click()

//         cy.contains(login.loginErrorMessage()).should('be.visible')
//     })

//     // it.only('Verify login with invalid username and invalid Password', () => {

//     //     cy.viewport('ipad-2')
        
//     //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//     //     cy.xpath(login.userNameInput()).type("Admin")
//     //     cy.get(login.passwordInput()).type("admin123")
//     //     cy.get(login.loginBtn()).click()

//     //     cy.contains(login.loginErrorMessage()).should('be.visible')

//     // })

//   })