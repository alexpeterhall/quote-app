/// <reference types="Cypress" />
import Tag from './Tag'

const testTags = ['tag1', 'tag2', 'tag3']

describe('The Tag component', () => {
  beforeEach(() => {
    cy.mount(<Tag tags={testTags} />)
    cy.get(`[data-qa=tagList]`).as('tagList')
  })
  it('should render the correct number of tags', () => {
    cy.get('[data-qa=tag]').should('have.length', 3)
  })
  it('should render the correct string for all provided tags', () => {
    cy.get('@tagList').should('have.text', '#tag1 #tag2 #tag3 ')
  })
  testTags.forEach((tag) => {
    it(`should render tag ${tag} as a clickable link`, () => {
      cy.get(`@tagList`).find(`[href=${tag}]`).should('have.text', `#${tag} `).and('be.visible')
    })
  })
})
