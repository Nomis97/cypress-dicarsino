describe('template spec', () => {
  it('passes', () => {
    //acy.visit('https://www.facebook.com/',{failOnStatusCode: false})
    cy.visit('http://localhost:8000/')
    cy.contains('#redirect_facebook', "Ir a facebook").click()
    cy.origin('https://www.facebook.com/marketplace/create/item', () => {
      cy.get('input[name="email"]').first().type("nomis.velasquez2@gmail.com",{force: true})
      cy.get('input[name="pass"]').first().type("Theworkmy@3",{force: true})
      //cy.get('input[type="submit"]').first().click({force: true})
    })
  })
})