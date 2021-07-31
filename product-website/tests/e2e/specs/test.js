// https://docs.cypress.io/api/introduction/api.html

describe('Complete testing first product', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.wait(2000)
  })
  it('Select first product', () => {
    cy.get('img').first().click()
    cy.wait(2000)
  })
  it('Select next image', () => {
    cy.get('.right').click()
    cy.wait(2000)
  })
  it('Select previous image', () => {
    cy.get('.left').click()
    cy.wait(2000)
  })
  it('Close the carousel', () => {
    cy.get('.close').click()
  })
})
