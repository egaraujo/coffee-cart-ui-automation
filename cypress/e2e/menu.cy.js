describe('menu', () => {
  
  it('should display header menu with three link items', () => {
    cy.visit('/');
    cy.get('ul').first().find('li').should('have.length', 3);
  })

  it('should visit each menu item link', () => {
    cy.visit('/');
    cy.get('a').each(page => {
      cy.request(page.prop('href'));
    });
  })
  
  it('should display nine coffee coups', () => {
    cy.visit('/');
    cy.get('li div.cup-body').should('have.length', 9);
  })

  it('should display Espresso information correctly', () => {
    cy.visit('/');

    const coffeeHeader = cy.get('h4').contains('Espresso');
    coffeeHeader.contains('$10.00');

    cy.get('[data-cy="Espresso"]').find('div').should('have.length', 1);

    cy.get('[data-cy="Espresso"]').find('div.espresso')
          .should('have.attr', 'style', 'height: 30%;');
  })

  it('should display Espresso Macchiato information correctly', () => {
    cy.visit('/');

    const coffeeHeader = cy.get('h4').contains('Espresso Macchiato');
    coffeeHeader.contains('$12.00');

    cy.get('[data-cy="Espresso-Macchiato"]').find('div').should('have.length', 2);

    cy.get('[data-cy="Espresso-Macchiato"]').find('div.espresso')
    .should('have.attr', 'style', 'height: 30%;');

    cy.get('[data-cy="Espresso-Macchiato"]').find('div.milk.foam')
    .should('have.attr', 'style', 'height: 15%;');
  })

  it('should display Capuccino information correctly', () => {
    cy.visit('/');

    const coffeeHeader = cy.get('h4').contains('Cappuccino');
    coffeeHeader.contains('$19.00');

    cy.get('[data-cy="Cappuccino"]').find('div').should('have.length', 3);

    cy.get('[data-cy="Cappuccino"]').find('div.espresso')
    .should('have.attr', 'style', 'height: 30%;');

    cy.get('[data-cy="Cappuccino"]').find('div.steamed.milk')
    .should('have.attr', 'style', 'height: 20%;');

    cy.get('[data-cy="Cappuccino"]').find('div.milk.foam')
    .should('have.attr', 'style', 'height: 50%;');
  })

  it('should display Mocha information correctly', () => {
    cy.visit('/');

    const coffeeHeader = cy.get('h4').contains('Mocha');
    coffeeHeader.contains('$8.00');

    cy.get('[data-cy="Mocha"]').find('div').should('have.length', 4);

    cy.get('[data-cy="Mocha"]').find('div.espresso')
    .should('have.attr', 'style', 'height: 30%;');

    cy.get('[data-cy="Mocha"]').find('div.chocolate.syrup')
    .should('have.attr', 'style', 'height: 20%;');

    cy.get('[data-cy="Mocha"]').find('div.steamed.milk')
    .should('have.attr', 'style', 'height: 25%;');

    cy.get('[data-cy="Mocha"]').find('div.whipped.cream')
    .should('have.attr', 'style', 'height: 25%;');
  })

  it('should display Flat White information correctly', () => {
    cy.visit('/');

    const coffeeHeader = cy.get('h4').contains('Flat White');
    coffeeHeader.contains('$18.00');

    cy.get('[data-cy="Flat-White"]').find('div').should('have.length', 2);

    cy.get('[data-cy="Flat-White"]').find('div.espresso')
    .should('have.attr', 'style', 'height: 30%;');

    cy.get('[data-cy="Flat-White"]').find('div.steamed.milk')
    .should('have.attr', 'style', 'height: 50%;');
  })

  it('should display Americano information correctly', () => {
    cy.visit('/');

    const coffeeHeader = cy.get('h4').contains('Americano');
    coffeeHeader.contains('$7.00');

    cy.get('[data-cy="Americano"]').find('div').should('have.length', 2);

    cy.get('[data-cy="Americano"]').find('div.espresso')
    .should('have.attr', 'style', 'height: 30%;');

    cy.get('[data-cy="Americano"]').find('div.water')
    .should('have.attr', 'style', 'height: 70%;');
  })

  it('should display Caffe Latte information correctly', () => {
    cy.visit('/');

    const coffeeHeader = cy.get('h4').contains('Cafe Latte');
    coffeeHeader.contains('$16.00');

    cy.get('[data-cy="Cafe-Latte"]').find('div').should('have.length', 3);

    cy.get('[data-cy="Cafe-Latte"]').find('div.espresso')
    .should('have.attr', 'style', 'height: 30%;');

    cy.get('[data-cy="Cafe-Latte"]').find('div.steamed.milk')
    .should('have.attr', 'style', 'height: 50%;');

    cy.get('[data-cy="Cafe-Latte"]').find('div.milk.foam')
    .should('have.attr', 'style', 'height: 20%;');
  })

  it('should display Espresso Con Panna information correctly', () => {
    cy.visit('/');

    const coffeeHeader = cy.get('h4').contains('Espresso Con Panna');
    coffeeHeader.contains('$14.00');

    cy.get('[data-cy="Espresso-Con Panna"]').find('div').should('have.length', 2);

    cy.get('[data-cy="Espresso-Con Panna"]').find('div.espresso')
    .should('have.attr', 'style', 'height: 30%;');

    cy.get('[data-cy="Espresso-Con Panna"]').find('div.whipped.cream')
    .should('have.attr', 'style', 'height: 15%;');
  })

  it('should display Cafe Breve information correctly', () => {
    cy.visit('/');

    const coffeeHeader = cy.get('h4').contains('Cafe Breve');
    coffeeHeader.contains('$15.00');

    cy.get('[data-cy="Cafe-Breve"]').find('div').should('have.length', 4);

    cy.get('[data-cy="Cafe-Breve"]').find('div.espresso')
    .should('have.attr', 'style', 'height: 25%;');

    cy.get('[data-cy="Cafe-Breve"]').find('div.steamed.milk')
    .should('have.attr', 'style', 'height: 30%;');

    cy.get('[data-cy="Cafe-Breve"]').find('div.steamed.cream')
    .should('have.attr', 'style', 'height: 30%;');

    cy.get('[data-cy="Cafe-Breve"]').find('div.milk.foam')
    .should('have.attr', 'style', 'height: 15%;');
  })

  it('should display Espresso title in Chinese', () => {
    cy.visit('/');

    const coffeeTitle = cy.get('h4').contains('Espresso').dblclick();
    coffeeTitle.contains('特浓咖啡');
  })

  it('should display Espresso Macchiato title in Chinese', () => {
    cy.visit('/');

    const coffeeTitle = cy.get('h4').contains('Espresso Macchiato').dblclick();
    coffeeTitle.contains('浓缩玛奇朵');
  })

  it('should display Cappuccino title in Chinese', () => {
    cy.visit('/');

    const coffeeTitle = cy.get('h4').contains('Cappuccino').dblclick();
    coffeeTitle.contains('卡布奇诺');
  })

  it('should display Mocha title in Chinese', () => {
    cy.visit('/');

    const coffeeTitle = cy.get('h4').contains('Mocha').dblclick();
    coffeeTitle.contains('摩卡');
  })

  it('should display Flat White title in Chinese', () => {
    cy.visit('/');

    const coffeeTitle = cy.get('h4').contains('Flat White').dblclick();
    coffeeTitle.contains('平白咖啡');
  })

  it('should display Americano title in Chinese', () => {
    cy.visit('/');

    const coffeeTitle = cy.get('h4').contains('Americano').dblclick();
    coffeeTitle.contains('美式咖啡');
  })

  it('should display Cafe Latte title in Chinese', () => {
    cy.visit('/');

    const coffeeTitle = cy.get('h4').contains('Cafe Latte').dblclick();
    coffeeTitle.contains('拿铁');
  })

  it('should display Espresso Con Panna title in Chinese', () => {
    cy.visit('/');

    const coffeeTitle = cy.get('h4').contains('Espresso Con Panna').dblclick();
    coffeeTitle.contains('浓缩康宝蓝');
  })

  it('should display Cafe Breve title in Chinese', () => {
    cy.visit('/');

    const coffeeTitle = cy.get('h4').contains('Cafe Breve').dblclick();
    coffeeTitle.contains('半拿铁');
  })

  it('should summarize selected products', () => {
    cy.visit('/');

    cy.get('[data-cy="Cafe-Latte"]').click();
    cy.get('[data-cy="Espresso-Con Panna"]').click();

    cy.get('[data-test="checkout"]').contains('Total: $30.00');

    cy.get('[data-test="checkout"]').trigger('mouseover');
    cy.get('.cart-preview > :nth-child(1)').contains('Cafe Latte x 1');
    cy.get('.cart-preview > :nth-child(2)').contains('Espresso Con Panna x 1');
  })

  it('should add fourth coffee in cart when accepted', () => {
    cy.visit('/');

    cy.get('[data-cy="Espresso"]').click();
    cy.get('[data-cy="Espresso-Macchiato"]').click();
    cy.get('[data-cy="Cappuccino"]').click();

    cy.get('.yes').click();
    cy.get('[aria-label="Cart page"]').click();
    cy.get('a.router-link-active').contains('cart (4)');

    cy.get('li.list-item').find('div').contains('(Discounted) Mocha');
    cy.get('li.list-item').find('div').contains('$4.00 x 1');
    cy.get('.list-item > :nth-child(3)').contains('$4.00');

    cy.get('li.list-item').find('div').contains('Cappuccino');
    cy.get('li.list-item').find('div').contains('$19.00 x 1');
    cy.get('.list-item > :nth-child(3)').contains('$19.00');

    cy.get('li.list-item').find('div').contains('Espresso');
    cy.get('li.list-item').find('div').contains('$10.00 x 1');
    cy.get('.list-item > :nth-child(3)').contains('$10.00');

    cy.get('li.list-item').find('div').contains('Espresso Macchiato');
    cy.get('li.list-item').find('div').contains('$12.00 x 1');
    cy.get('.list-item > :nth-child(3)').contains('$12.00');

    cy.get('[data-test="checkout"]').contains('Total: $45.00');  
  })

  it('should omit fourth coffee in cart when rejected', () => {
    cy.visit('/');

    cy.get('[data-cy="Espresso"]').click();
    cy.get('[data-cy="Espresso-Macchiato"]').click();
    cy.get('[data-cy="Cappuccino"]').click();

    cy.get('div.promo').contains('Nah, I\'ll skip.').click();
    cy.get('[aria-label="Cart page"]').click();
    cy.get('a.router-link-active').contains('cart (3)');

    cy.get('li.list-item').find('div').contains('Cappuccino');
    cy.get('li.list-item').find('div').contains('$19.00 x 1');
    cy.get('.list-item > :nth-child(3)').contains('$19.00');

    cy.get('li.list-item').find('div').contains('Espresso');
    cy.get('li.list-item').find('div').contains('$10.00 x 1');
    cy.get('.list-item > :nth-child(3)').contains('$10.00');

    cy.get('li.list-item').find('div').contains('Espresso Macchiato');
    cy.get('li.list-item').find('div').contains('$12.00 x 1');
    cy.get('.list-item > :nth-child(3)').contains('$12.00');

    cy.get('[data-test="checkout"]').contains('Total: $41.00');  
  })

  it('should increase cart total when a product is added', () => {
    cy.visit('/');
    cy.get('[data-cy="Cappuccino"]').click();

    cy.get('[aria-label="Cart page"]').click();
    cy.get('a.router-link-active').contains('cart (1)');
    cy.get('[data-test="checkout"]').contains('Total: $19.00');

    cy.get(':nth-child(2) > .unit-controller > [aria-label="Add one Cappuccino"]').click();
    cy.get('.list-item > :nth-child(3)').contains('$38.00');
    cy.get('[data-test="checkout"]').contains('Total: $38.00');
  })

  it('should decrease cart total when a product is removed', () => {
    cy.visit('/');
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
    cy.visit('/');
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
    cy.visit('/');
    cy.get('[data-cy="Espresso"]').rightclick();
    cy.get('[data-cy="add-to-cart-modal"]').find('Form').contains('No').click();
    cy.get('[aria-label="Cart page"]').click();

    cy.get('a.router-link-active').contains('cart (0)');
    cy.get('p').contains('No coffee, go add some.');
  })

  it('should alert on empty name for payment data', () => {
    cy.visit('/');
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
    cy.visit('/');
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
    cy.visit('/');
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