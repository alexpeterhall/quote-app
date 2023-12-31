/// <reference types="Cypress" />
import Quote from './Quote'

describe('The Quote component', () => {
  it('renders a quote with no tags', () => {
    cy.mount(<Quote quote={{ quote: 'This is just a test.', author: 'Testy McTester', tags: [] }} />)
    cy.get('[data-qa=quote]').should('have.text', 'This is just a test.')
    cy.get('[data-qa=author]').should('have.text', 'Testy McTester')
    cy.get('[data-qa=tagList]').should('not.exist')
  })
  it('renders a quote with one tag', () => {
    cy.mount(<Quote quote={{ quote: 'This is just a test.', author: 'Testy McTester', tags: ['test'] }} />)
    cy.get('[data-qa=quote]').should('have.text', 'This is just a test.')
    cy.get('[data-qa=author]').should('have.text', 'Testy McTester')
    cy.get('[data-qa=tagList]').should('have.text', '#test ')
  })
  it('renders a quote with multiple tags', () => {
    cy.mount(<Quote quote={{ quote: 'This is just a test.', author: 'Testy McTester', tags: ['testing', '123'] }} />)
    cy.get('[data-qa=quote]').should('have.text', 'This is just a test.')
    cy.get('[data-qa=author]').should('have.text', 'Testy McTester')
    cy.get('[data-qa=tagList]').should('have.text', '#testing #123 ')
  })
})
