import {faker} from '@faker-js/faker'


describe('Site saucedemo ' , () => {

    it('validando fluxo de compra ', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').should('contain','Products')
    cy.get('#item_4_img_link > .inventory_item_img').click()
    cy.get('.btn_primary').click()
    cy.get('body').click()
    cy.get('.fa-layers-counter').click()
    cy.get('.cart_footer > .btn_secondary').click()
    cy.get('#item_1_img_link > .inventory_item_img').click()
    cy.get('.btn_primary').click()
    cy.get('body').click()
    cy.get('.fa-layers-counter').click()
    cy.get('.fa-layers-counter').should('have.text','2')
    cy.get('.btn_action').click()
    cy.get('[data-test="firstName"]').type('maria')
    cy.get('[data-test="lastName"]').type('campos')
    cy.get('[data-test="postalCode"]').type('65654654')
    cy.get('.btn_primary').click()
    cy.get('.summary_total_label').should('have.text','Total: $49.66')
    cy.get('.btn_action').click()
    cy.get('.complete-header').should('contain','THANK YOU FOR YOUR ORDER')
    

})
})