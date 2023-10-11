describe('Verify Search functionality', () => {
  it('Verify user can search in google', () => {
    cy.visit('http://google.com/')

    cy.get('textarea[aria-label="Search"]').type("Tajmahal{enter}")

    cy.wait(5000)
    cy.reload()

    cy.wait(5000)

    cy.go(-1)

    cy.wait(5000)

    cy.go(1)

  })
})