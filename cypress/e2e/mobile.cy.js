describe('Site saucedemo', () => {

   
    const devices = [
      'iphone-6', 
      'iphone-7', 
      'iphone-8', 
      'samsung-s10',
      'iphone-xr', 
      
    ];
  
    
    devices.forEach((device) => {
      it.only(`logando com sucesso em ${device}`, () => {
        cy.viewport(device)  
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')
      });
    });
  
  });
  