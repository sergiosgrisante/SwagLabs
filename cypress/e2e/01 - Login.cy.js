describe('<Login>', function(){
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/v1/index.html') // Visita o endereço do pwa
        
    })

    it('TC001 - Login realizado com sucesso', function(){
        cy.Login_valido()
    })
    it('TC002 - Login inválido com erro', function(){
        cy.Login_invalido()
    })
})
