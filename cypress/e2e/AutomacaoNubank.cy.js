describe('Site Nubank', () => {
    it('Acessando o site Nubank e criando cadastro', () => {
        cy.visit('https://nubank.com.br/');
        cy.get('#field-cpf').type('395.483.021-36');
        cy.get('#test').click();
        cy.get('#field-name').type('Silvana Sophia Valentina Barbosa');
        cy.get('#field-phone').type('77991919191');
        cy.get('#field-email').type('silvanasophiabarbosa@desari.com.br');
        cy.get('.hNOIJl > :nth-child(6)').type('silvanasophiabarbosa@desari.com.br')
        cy.get('#label-acceptedWhatsapp > .sc-bYWUiG').click();
        cy.get('#label-accepted > .sc-bYWUiG').click();
        cy.get('.hNOIJl > .sc-UnBNk').click();

       
    });
});