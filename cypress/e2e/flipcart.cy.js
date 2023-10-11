describe('click on hidden element', () => {
    it('click on element', () => {
      cy.visit('https://www.cypress.io/')
  
    cy.get('p[class="mx-auto mt-[8px] max-w-[1008px] text-[18px] leading-[28px] text-gray-700 md:text-[20px] md:leading-[32px]"]').then((txt)=>{

      var textvalue = txt.text()

      cy.log(textvalue)

      cy.writeFile('cypress/fixtures/module1/test2.txt', textvalue);

      cy.writeFile('cypress/fixtures/module1/text8.json', { textval :textvalue});
     
    })
      
      //cy.contains('Installing Cypress').click({force:true})
    })
  })