/// <reference types="Cypress" />
import QuoteList from './QuoteList'

//TODO Need to bring in Firebase or stub and get data to Quote somehow
describe('The QuoteList component', () => {
  it('renders a quote', () => {
    cy.mount(<QuoteList />)
    cy.get('[data-cy=quote]').should('have.text', 'This is just a test.')
    cy.get('[data-cy=author]').should('have.text', 'Testy McTester')
    cy.get('[data-cy=tagList]').should('not.exist')
  })
  it('renders the "Next Quote" button', () => {
    cy.mount(<QuoteList />)
    cy.get('[data-cy=nextQuoteButton]').should('have.text', 'Next Quote').and('should.be.clickable')
  })
})
