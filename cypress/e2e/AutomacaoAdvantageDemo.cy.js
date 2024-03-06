describe('Site Advantage ' , () => {

    it('acessando o site Advantege e criando cadastro', () => {
    cy.visit('https://www.advantageonlineshopping.com/#/')
   
    cy.get('header').should('be.visible')
    cy.pause()
    cy.screenshot('telainicial')

})
})