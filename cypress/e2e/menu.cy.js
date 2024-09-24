describe('menu', () => {

  const coffeeNameTranslations = require('../fixtures/coffeeNameTranslations.json')
  const coffeeCupCompositions = require('../fixtures/coffeeCupCompositions.json')

  beforeEach(() => {
    cy.visit('/');
  })
  
  it('should display header menu with three link items', () => {
    cy.get('ul').first().find('li').should('have.length', 3);
  })

  it('should visit each menu item link', () => {
    cy.get('a').each(page => {
      cy.request(page.prop('href'));
    });
  })
  
  it('should display nine coffee coups', () => {
    cy.get('li div.cup-body').should('have.length', 9);
  })

  it('should display each coffee cup information correctly', () => {
    coffeeCupCompositions.forEach(coffeeCup => {
      const coffeeHeader = cy.get('h4').contains(coffeeCup.name);
      coffeeHeader.contains(coffeeCup.price);

      var cupLocator = "[data-cy='" + coffeeCup.dataCy + "']"
      var ingredients = coffeeCup.ingredients

      cy.get(cupLocator).find('div').should('have.length', ingredients.length);

      ingredients.forEach(ingredient => {
        cy.verifyIngredient(cupLocator, ingredient.name, ingredient.percentage)
      })
    })
  })

  it('should display each coffee name in Chinese', () => {
      var coffeeTitle;
      coffeeNameTranslations.forEach(coffee => {
      coffeeTitle = cy.get('h4').contains(coffee.originalCoffeeName).dblclick();
      coffeeTitle.contains(coffee.translatedCoffeeName);
    })
  })

  it('should summarize selected products', () => {
    cy.get('[data-cy="Cafe-Latte"]').click();
    cy.get('[data-cy="Espresso-Con Panna"]').click();

    cy.get('[data-test="checkout"]').contains('Total: $30.00');

    cy.get('[data-test="checkout"]').trigger('mouseover');
    cy.get('.cart-preview > :nth-child(1)').contains('Cafe Latte x 1');
    cy.get('.cart-preview > :nth-child(2)').contains('Espresso Con Panna x 1');
  })

  it('should add fourth coffee in cart when accepted', () => {
    cy.get('[data-cy="Espresso"]').click();
    cy.get('[data-cy="Espresso-Macchiato"]').click();
    cy.get('[data-cy="Cappuccino"]').click();

    cy.get('.yes').click();
    cy.get('[aria-label="Cart page"]').click();
    cy.get('a.router-link-active').contains('cart (4)');

    cy.verifyCartLine('(Discounted) Mocha', '$4.00 x 1', '$4.00');
    cy.verifyCartLine('Cappuccino', '$19.00 x 1', '$19.00');
    cy.verifyCartLine('Espresso', '$10.00 x 1', '$10.00');
    cy.verifyCartLine('Espresso Macchiato', '$12.00 x 1', '$12.00');

    cy.get('[data-test="checkout"]').contains('Total: $45.00');  
  })

  it('should omit fourth coffee in cart when rejected', () => {
    cy.get('[data-cy="Espresso"]').click();
    cy.get('[data-cy="Espresso-Macchiato"]').click();
    cy.get('[data-cy="Cappuccino"]').click();

    cy.get('div.promo').contains('Nah, I\'ll skip.').click();
    cy.get('[aria-label="Cart page"]').click();
    cy.get('a.router-link-active').contains('cart (3)');

    cy.verifyCartLine('Cappuccino', '$19.00 x 1', '$19.00');
    cy.verifyCartLine('Espresso', '$10.00 x 1', '$10.00');
    cy.verifyCartLine('Espresso Macchiato', '$12.00 x 1', '$12.00');
    
    cy.get('[data-test="checkout"]').contains('Total: $41.00');  
  })

  it('should increase cart total when a product is added', () => {
    cy.get('[data-cy="Cappuccino"]').click();

    cy.get('[aria-label="Cart page"]').click();
    cy.get('a.router-link-active').contains('cart (1)');
    cy.get('[data-test="checkout"]').contains('Total: $19.00');

    cy.get(':nth-child(2) > .unit-controller > [aria-label="Add one Cappuccino"]').click();
    cy.get('.list-item > :nth-child(3)').contains('$38.00');
    cy.get('[data-test="checkout"]').contains('Total: $38.00');
  })

  it('should decrease cart total when a product is removed', () => {
    cy.get('[data-cy="Flat-White"]').click();
    cy.get('[data-cy="Americano"]').click();

    cy.get('[aria-label="Cart page"]').click();
    cy.get('a.router-link-active').contains('cart (2)');
    cy.get('[data-test="checkout"]').contains('Total: $25.00');

    cy.get(':nth-child(3) > :nth-child(2) > .unit-controller > [aria-label="Remove one Flat White"]').click();
    cy.get('.list-item > :nth-child(3)').contains('$7.00');
    cy.get('[data-test="checkout"]').contains('Total: $7.00');
  })

  it('should open cart dialog and add coffe to cart', () => {
    cy.get('[data-cy="Americano"]').rightclick();
    cy.get('[data-cy="add-to-cart-modal"]').find('Form').contains('Yes').click();
    cy.get('[aria-label="Cart page"]').click();

    cy.get('a.router-link-active').contains('cart (1)');
    cy.get('li.list-item').find('div').contains('Americano');
    cy.get('li.list-item').find('div').contains('$7.00 x 1');
    cy.get('.list-item > :nth-child(3)').contains('$7.00');
    cy.get('[data-test="checkout"]').contains('Total: $7.00');
  })

  it('should open cart dialog and keep cart empty', () => {
    cy.get('[data-cy="Espresso"]').rightclick();
    cy.get('[data-cy="add-to-cart-modal"]').find('Form').contains('No').click();
    cy.get('[aria-label="Cart page"]').click();

    cy.get('a.router-link-active').contains('cart (0)');
    cy.get('p').contains('No coffee, go add some.');
  })

  it('should alert on empty name for payment data', () => {
    cy.get('[data-cy="Espresso"]').click();
    cy.get('[data-cy="Espresso-Macchiato"]').click();

    cy.get('[aria-label="Cart page"]').click();

    cy.get('[data-test="checkout"]').click();
    cy.get('#email').type('moe@howard.com');

    cy.get('#submit-payment').click();

    cy.get('.modal-content').within(() => {
      cy.get('#name').invoke('prop', 'validationMessage')
        .should('not.equal', '')
      })
  })

  it('should alert on empty mail for payment data', () => {
    cy.get('[data-cy="Espresso"]').click();
    cy.get('[data-cy="Espresso-Macchiato"]').click();

    cy.get('[aria-label="Cart page"]').click();

    cy.get('[data-test="checkout"]').click();
    cy.get('#name').type('Moe Howard');

    cy.get('#submit-payment').click();
    
    cy.get('.modal-content').within(() => {
      cy.get('#email').invoke('prop', 'validationMessage')
        .should('not.equal', '')
      })
  })

  it('should submit payment details when personal data is completed', () => {
    cy.get('[data-cy="Espresso"]').click();
    cy.get('[data-cy="Espresso-Macchiato"]').click();

    cy.get('[aria-label="Cart page"]').click();

    cy.get('[data-test="checkout"]').click();
    cy.get('#name').type('Moe Howard');
    cy.get('#email').type('moe@howard.com');
    cy.get('#submit-payment').click();
    
    cy.get('a.router-link-active').contains('menu');
    cy.get('.snackbar').contains('Thanks for your purchase. Please check your email for payment.');
  })
})