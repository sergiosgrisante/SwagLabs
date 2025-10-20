describe('Validações "Adicionar ao Carrinho/Finalizar Compra"', function() {

    beforeEach(function() {
        // Visita a página de login 
        cy.visit('https://www.saucedemo.com/v1/index.html'); 

        // Valida que o logo da tela de login está visível
        cy.get('.login_logo').should('be.visible');

        // Realiza login válido utilizando comando customizado
        cy.Login_valido();
    });

    // Caso de teste: compra de um único produto com sucesso
    it('TC01_Validação_CompraProdutoUnico_ComSucesso', function() {
        // Adiciona o primeiro produto ao carrinho
        cy.get('button.btn_primary.btn_inventory').eq(1).click();

        // Acessa o carrinho de compras
        cy.get('.shopping_cart_link').click();

        // Valida que a tela do carrinho está visível
        cy.get('.subheader').should('be.visible');

        // Clica no botão para iniciar o checkout
        cy.get('.btn_action').click()

        // Valida que a tela de informações do checkout está visível
        cy.get('.subheader').should('be.visible');

        // Preenche os campos obrigatórios do formulário de checkout
        cy.get('[data-test="firstName"]').type('Sérgio');
        cy.get('[data-test="lastName"]').type('Grisante');
        cy.get('[data-test="postalCode"]').type('03155030');

        // Avança para a próxima etapa do checkout
        cy.get('input[type="submit"].btn_primary.cart_button').click();

        // Finaliza a compra
        cy.get('.btn_action').click();

        // Valida a mensagem final de sucesso da compra
        cy.get('.complete-header')
          .should('be.visible')
          .and('have.text', 'THANK YOU FOR YOUR ORDER');
    });

    // Caso de teste: compra de vários produtos juntos
    it('TC02_Validação_CompraMultiplaProdutos_ComSucesso', function() {

        // Adiciona vários produtos ao carrinho
        cy.get('button.btn_primary.btn_inventory').eq(1).click();
        cy.get('button.btn_primary.btn_inventory').eq(2).click(); 
        cy.get('button.btn_primary.btn_inventory').eq(3).click();

        // Acessa o carrinho
        cy.get('.shopping_cart_link').click();

        // Valida que a tela do carrinho está visível
        cy.get('.subheader').should('be.visible');

        // Inicia o checkout
        cy.get('.btn_action').click();

        // Preenche os campos obrigatórios do formulário de checkout
        cy.get('[data-test="firstName"]').type('Sérgio');
        cy.get('[data-test="lastName"]').type('Grisante');
        cy.get('[data-test="postalCode"]').type('03155030');

        // Avança para a próxima etapa
        cy.get('input[type="submit"].btn_primary.cart_button').click();

        // Finaliza a compra
        cy.get('.btn_action').click();

        // Valida a mensagem final de sucesso
        cy.get('.complete-header')
          .should('be.visible')
          .and('have.text', 'THANK YOU FOR YOUR ORDER');
    });

    // Caso de teste: remover produto depois de adicionado
    it('TC03_Validação_RemocaoProdutoDoCarrinho', function() {
        // Adiciona um produto ao carrinho
        cy.get(':nth-child(2) > .pricebar > .btn_primary').click();

        // Acessa o carrinho
        cy.get('.shopping_cart_link').click();

        // Valida que a tela do carrinho está visível
        cy.get('.subheader').should('be.visible');

        // Clica no botão para remover o produto
        cy.contains('button.btn_secondary.cart_button', 'REMOVE').click();

        // Valida que o produto foi realmente removido
        cy.get('.cart_item').should('not.exist');
    });

    // Caso de teste: Continuar comprando ao retornar ao menu de itens
    it('TC04_Validação_ContinuarComprando', function() {

        // Adiciona o segundo produto da lista ao carrinho
        cy.get('button.btn_primary.btn_inventory').eq(1).click();
        // Adiciona o terceiro produto da lista ao carrinho
        cy.get('button.btn_primary.btn_inventory').eq(2).click(); 
    
        // Acessa o carrinho
        cy.get('.shopping_cart_link').click();
    
        // Clica no botão "Continue Shopping" para retornar à página de produtos
        cy.get('a.btn_secondary').contains('Continue Shopping').click();
    
        // Adiciona o quarto produto da lista ao carrinho após continuar comprando
        cy.get('button.btn_primary.btn_inventory').eq(3).click();
    
        // Volta ao carrinho para validar os itens adicionados
        cy.get('.shopping_cart_link').click();
    
        // Valida que a página do carrinho está visível
        cy.get('.subheader').should('be.visible');
    
        // Clica no botão "CHECKOUT" para iniciar o processo de finalização da compra
        cy.get('a.btn_action.checkout_button').contains('CHECKOUT').click();
    
        // Valida que a página de informações do checkout está visível
        cy.get('.subheader').should('be.visible');
    
        // Preenche os campos obrigatórios do formulário de checkout
        cy.get('[data-test="firstName"]').type('Sérgio');
        cy.get('[data-test="lastName"]').type('Grisante');
        cy.get('[data-test="postalCode"]').type('03155030');
    
        // Clica no botão "CONTINUE" para prosseguir no checkout
        cy.get('input.btn_primary.cart_button[type="submit"][value="CONTINUE"]').click();
    
        // Clica no botão "FINISH" para finalizar o pedido
        cy.get('a.btn_action.cart_button').contains('FINISH').click();
    
        // Valida que a mensagem final de sucesso do pedido está visível e correta
        cy.get('.complete-header')
          .should('be.visible')
          .and('have.text', 'THANK YOU FOR YOUR ORDER');
    
    });
})    