   const UrlBase = 'https://www.advantageonlineshopping.com/#/'
   const btnIcon = '#hrefUserIcon'
   const btnCriarcadastro = '.create-new-account'
   const cpUserName =  ':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine'
   const cpUserEmail = '[sec-name="userEmail"] > .inputContainer > .ng-pristine'
   const cpDigiteSenha = ':nth-child(3) > [a-hint="Password"] > .inputContainer > label'
   const cpConfirmSenha = '[a-hint="Confirm password"] > .inputContainer > label'
   const cpName = '[sec-name="userFirstName"] > .inputContainer > .ng-pristine'
   const cpSobrenome = '[sec-name="userLastName"] > .inputContainer > label'
   const cpTel = ':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > label'
   const cpPais = '[sec-name="userCountry"] > .inputContainer > .ng-pristine'
   const cpCidade = '[sec-name="userCity"] > .inputContainer > .ng-pristine'
   const cpRua = '[sec-name="userAdress"] > .inputContainer > .ng-pristine'
   const cpEstado = '[sec-name="userState"] > .inputContainer > label'
   const cpCep = '#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > label'
   const btnDesopcão = '#formCover > .option > .ng-pristine'
   const btnMaropcão = '[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine'
   const btnRegistrar = '#register_btn'
   const btnSenhaerrada = '[a-hint="Password"] > .inputContainer > .ng-pristine'
   const btnsiga = '#sign_in_btn'
   const cpMostrarmsg = '#signInResultMessage'
   const cpSenhacorreta = '[a-hint="Password"] > .inputContainer > label'
   const cpUsernomelog = '[a-hint="Username"] > .inputContainer > .ng-pristine'
   const cpMostraLink = '#menuUserLink'
   const cpMostrarvisivel = '#loginMiniTitle > [translate="My_account"]'
   const btnMostrarconta = '#loginMiniTitle > [translate="My_account"]'
   const btnDeletaconta = '.deleteMainBtnContainer'
   const btnSimdeleta = '.deleteRed'
describe('Site Advantage ' , () => {

    it('acessando o site Advantege e criando cadastro', () => {
    cy.visit(UrlBase)
    cy.get(btnIcon).click()
    cy.get(btnCriarcadastro).click()
    cy.get(cpUserName).type('testando')
    cy.get(cpUserEmail).type('martamarinhoo@hotmail.com')
    cy.get(cpDigiteSenha).type('Teste12345')
    cy.get(cpConfirmSenha).type('Teste12345')
    cy.get(cpName).type('Teste')
    cy.get(cpSobrenome).type('turma')
    cy.get(cpTel).type('991919191')
    cy.get(cpPais).type('Brazil')
    cy.get(cpCidade).type('Serra Dourada')
    cy.get(cpRua).type('Rua Benigno Pinheiro Maciel')
    cy.get(cpEstado).type('Bahia')
    cy.get(cpCep ).type('4774000');
    cy.get(btnDesopcão).click()
    cy.get(btnMaropcão ).click()
    cy.get(btnRegistrar).click()
    

})


describe(' site Advantage', () => {
    it('acessando site e logando com dados invalidos' , () => {
        cy.visit(UrlBase)
        cy.get(btnIcon).click()
        cy.get(cpUsernomelog).type('testando')
        cy.get(btnSenhaerrada).type('Teste123456')
        cy.get(btnsiga).click()
        cy.get(cpMostrarmsg).should("be.visible")


 })

 describe('site Advantege' , () => {
    
    it('acessando site e logando com dados validos' , () => {
        cy.visit(UrlBase)
        cy.get(btnIcon).click()
        cy.get(cpUsernomelog ).type('testando')
        cy.get(cpSenhacorreta).type('Teste12345')
       // cy.wait(4000)
        cy.get(btnsiga).click()
        cy.get(btnIcon).click()
        cy.get(cpMostrarvisivel).should('be.visible')

        
        
    
  })

  describe('site advantage' , () =>{

    it('acessando conta e deletando conta' , ()=> {
    cy.visit(UrlBase)
    cy.get(btnIcon).click()
    cy.get(cpUsernomelog ).type('testando')
    cy.get(cpSenhacorreta).type('Teste12345')
    cy.get(btnsiga).click()
   //cy.wait(2000)
    cy.get(btnIcon).click()
    cy.get(btnMostrarconta).click()
    cy.get(btnDeletaconta).click()
    cy.get(btnSimdeleta).click()



    })
  })

     })

})

})
