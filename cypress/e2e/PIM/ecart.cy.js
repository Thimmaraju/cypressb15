
var firstprice
var secondprice
describe('Verify E commerce  functionality', () => {

    it('Verify  total price of the cart', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.contains('ADD TO CART').first().click()

        cy.get('#root > div > div.products-wrapper > div > div:nth-child(2) > div.product-action > button').click()

        cy.get('#root > div > div.products-wrapper > div > div:nth-child(1) > p').then((txt) =>{

             firstprice = Number(txt.text())
            cy.log(firstprice)
        })


        cy.get('#root > div > div.products-wrapper > div > div:nth-child(2) > p').then((txt) =>{

             secondprice = Number(txt.text())
            cy.log(secondprice)
        })

        cy.get('#root > div > header > div > div.cart > div.cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3) > strong').then((txt) =>{

            var total = Number(txt.text())
            cy.log(total)

            var sum = firstprice+secondprice
            expect(sum).to.equal(total)
        })

     
        var str1 = "pavan"

        var str2 = "Pavan".toLocaleLowerCase()
        expect(str1).to.equal(str2)


    })

})