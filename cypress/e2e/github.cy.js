describe('github', () => {

it('should reach every link on github page', () => {
    cy.visit('/github')
    cy.get('div .container a').each(page => {
      cy.request(page.prop('href'))
    })
  })
})