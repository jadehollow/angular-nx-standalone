describe('store', () => {
  beforeEach(() => cy.visit('/iframe.html?id=shopcomponent--primary'));
  it('should render the component', () => {
    cy.get('store-shop').should('exist');
  });
});
