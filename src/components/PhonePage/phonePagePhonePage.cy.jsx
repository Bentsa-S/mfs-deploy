import React from 'react'
import { PhonePage } from './phonePage'

describe('<PhonePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PhonePage />)
  })
})