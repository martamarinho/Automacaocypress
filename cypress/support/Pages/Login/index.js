import { elements as el } from "./elements"

class Login {
visitarPagina(){
    cy.visit("https://www.saucedemo.com/v1/")
  

}

preenchercredenciaisvalidas(){

    cy.get(el.cpUserName).type('standard_user')
    cy.get(el.password).type('secret_sauce')
    cy.get(el.loginButton).click()




}

}

export default new Login()