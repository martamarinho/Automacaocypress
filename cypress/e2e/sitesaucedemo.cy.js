/// <reference types="cypress"/>

const cypress = require("cypress")



describe('Teste funcional de login', ()=>{

    it('Deve realizar login com sucesso', () =>{
    cy.visit("https://www.saucedemo.com/v1/")
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    
    cy.screenshot('logado em conta')


    })
    
    })
    
    