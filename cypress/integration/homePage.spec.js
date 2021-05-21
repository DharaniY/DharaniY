describe('Visual regression tests', () => {
  //const now = new Date(2021, 1, 1)
  it('Should match previous screenshot "homepae Page"', () => {
    //const now = new Date(Date.UTC(2021, 1, 1)).getTime()
    //cy.clock(now)
    cy.visit('')
    cy.viewport(1280, 720)
    cy.matchImageSnapshot()
  })
  it('Should match previous screenshot "Advisor Page"', () => {
    //const now = new Date(Date.UTC(2021, 1, 1)).getTime()
    //cy.clock(now)
    cy.visit('/store/advisor')
    cy.viewport(1280, 720)
    cy.matchImageSnapshot()
  })
  //Single element snapshot verification
  it('Shoul match previous sceenshot "Crucial Logo"', () => {
    cy.visit('')
    cy.viewport(1280, 720)
    cy.get('.header-logo .link').matchImageSnapshot()
  })
})
