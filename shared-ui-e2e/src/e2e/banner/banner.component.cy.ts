describe('shared-ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=bannercomponent--primary&args=text;')
  );
  it('should render the component', () => {
    cy.get('store-banner').should('exist');
  });
});
