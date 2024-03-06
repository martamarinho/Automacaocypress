

describe('Site saucedemo ' , () => {

    it.only('logando com sucesso ', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').should('contain','Products')
});
it('logando com dados senha invalida ', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce1')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
});
it('logando com dados login invalido ', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user1')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
})

})
