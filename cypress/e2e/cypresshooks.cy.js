
describe("test suite name", ()=>{

    after( ()=>{

        cy.log("This After All hook")
 
      })

      afterEach( ()=>{

        cy.log("This After Each hook")
 
      })

     before( ()=>{

       cy.log("This Before All hook")

     })


     beforeEach( ()=>{

        cy.log("This Before Each hook")
 
      })




    it.only("test case 1", ()=>{

        cy.log("1st it block body")
    })

    
    specify("test case 2", ()=>{
   
        cy.log("2nd it block body")

    })

    
    it.skip("test case 3", ()=>{

        cy.log("3rd it block body")
    })

})