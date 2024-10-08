// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('verifyIngredient', (cup, ingredient, percentage) => {
    cy.get(cup)
      .find(ingredient)
      .should('have.attr', 'style', percentage);
})

Cypress.Commands.add('verifyCartLine', (name, quantity, price) => {
  cy.get('li.list-item').find('div').contains(name);
  cy.get('li.list-item').find('div').contains(quantity);
  cy.get('.list-item > :nth-child(3)').contains(price);
})