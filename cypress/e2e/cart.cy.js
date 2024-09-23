describe('cart', () => {

    it('should have an empty cart initially', () => {
        cy.visit('/cart');
        cy.get('a.router-link-active').contains('cart (0)');
        cy.get('p').contains('No coffee, go add some.');
    })
})