/// <reference types="Cypress" />
import Button from './Button'

describe('The Button component', () => {
  beforeEach(() => {
    const onClickSpy = cy.spy().as('onClickSpy')
    cy.mount(<Button clickHandler={onClickSpy}>Testing123</Button>)
  })
  it('renders a Button with the provided text', () => {
    cy.get('[data-qa=Testing123Button]').should('have.text', 'Testing123').and('be.visible')
  })
  it('renders a Button that calls the provided onClick handler', () => {
    cy.get('[data-qa=Testing123Button]').as('button').should('have.text', 'Testing123')
    cy.get('@button').click()
    cy.get('@onClickSpy').should('have.been.calledOnce')
  })
})
