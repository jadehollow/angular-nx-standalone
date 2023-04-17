describe('cart', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cartroutecomponent--primary'));
  it('should render the component', () => {
    cy.get('store-cart-route').should('exist');
  });
});
