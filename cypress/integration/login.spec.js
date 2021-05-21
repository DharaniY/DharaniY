import '@percy/cypress'
describe('Visual Regression - Login Page', () => {
  before(function () {
    cy.visit('')
    cy.viewport(1280, 720)
    cy.get('[data-toggle="account-dropdown-menu"]').click()
    cy.get('.simple-link--icon [data-hover] .sign-in').click()
    //cy.percySnapshot('LoginPage')
    cy.get('#loginEmail').type('dharani.y@gmail.com')
    cy.get('#loginPassword').type('Passw0rd')
    cy.get("[type='submit']").click()
  })

  it('Desktop Layout', () => {
    cy.setResolution([1280, 720])
    cy.matchImageSnapshot()
  })

  it('Tablet Layout', () => {
    cy.setResolution('iphone-6')
    cy.matchImageSnapshot()
  })
``
  it('Mobile Layout', () => {
    cy.setResolution('ipad-2')
    cy.matchImageSnapshot()
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})
