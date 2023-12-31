import registerdata from '../fixtures/register.json'
describe('Understanding Fixtures',function ()  {

    // before(function () {
    //     cy.fixture('PIM/rajutest').then(function (data) {
    //       this.data = data;
    //     })
    //   })

    it('Validate register flow ', function ()  {
      cy.visit('https://shop.demoqa.com/my-account/');


      //cy.wait(40000)
      cy.get("#reg_username").type(registerdata.username)

      cy.get("#reg_email").type(registerdata.emailaddress)

       cy.get("#reg_password").type(registerdata.weakpassword)

       cy.get('button[name="register"]').should("be.disabled");

    //or
    //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
       cy.get('button[name="register"]').should('have.attr', 'disabled', 'disabled');

      cy.get("#reg_password").clear()

      cy.wait(5000)

      cy.get("#reg_password").type(registerdata.strongpassword)

      cy.wait(5000)

      cy.get('button[name="register"]').click()

      //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
      cy.get("#username").should('have.attr', 'value', registerdata.username)

      //or

      cy.get("#username").should("have.value", registerdata.username)
      
    })
  
  })