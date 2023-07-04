/// <reference types="Cypress" />
import { createApp } from '../../setup'

describe('The QuoteList component', () => {
  beforeEach(() => {
    cy.mount(createApp())
  })

  it('renders a quote', () => {
    // cy.mount(createApp())
    cy.get('[data-qa=quote]').should('be.visible')
    cy.get('[data-qa=author]').should('be.visible')
    cy.get('[data-qa=tagList]').should('be.visible')
  })
  it('renders the "Next Quote" button', () => {
    cy.get('[data-qa=NextQuoteButton]').should('have.text', 'Next Quote').and('be.visible')
  })
})
