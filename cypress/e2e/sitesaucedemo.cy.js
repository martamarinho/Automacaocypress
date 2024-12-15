


import Login from '../Pages/Login';


describe('Teste funcional de login', ()=>{

    it('Deve realizar login com sucesso', () =>{
    Login.visitarPagina()
    Login.preenchercredenciasvalidas()
    
    cy.screenshot('logado em conta')


    })
    
    })
    
    