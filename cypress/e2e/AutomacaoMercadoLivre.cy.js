
describe ('site mercado livre', () => {
    it ('acessando site mercado livre e validando fluxo de pesquisa',  () => {
        cy.visit('https://www.mercadolivre.com.br/');
        cy.get('#cb1-edit').type('tv smart');
        cy.get('.nav-icon-search').click();
      
    
        
        
    })
})