import logindata from '../../fixtures/login.json'

import addjobtitledata from '../../fixtures/admindata/addjobtitle.json'


describe('Verify Add Job title functionality', () => {

    beforeEach(()=>{

        //cy.viewport("ipad-2")
         
        cy.login(logindata.username, logindata.password)
       
        cy.navigatetoAddJobPage()
     
    })

    it('Verify adding job title valid inputs', () => {
     

       
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(addjobtitledata.jobtitle+r)
        cy.get('textarea[placeholder="Type description here"]').type(addjobtitledata.jobdescription)

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should('be.visible')

    })


    it('Verify Mandotory fields in Add job title page', () => {


        cy.get('button[type="submit"]').click()

        cy.contains('Required').should("be.visible")


    })

    it('Verify Mandotory fields in Add job title page', () => {


       
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type('khdsbgfiudwhf bsufvhiyf jhgvuywegfu khdsbgfiudwhf bsufvhiyf jhgvuywegfu khdsbgfiudwhf bsufvhiyf jhgvuywegfu')
        
        cy.contains('Should not exceed 100 characters').should('be.visible')


    })

  })