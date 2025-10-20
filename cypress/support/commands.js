Cypress.Commands.add('Login_valido', function(){ // Login válido
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.app_logo').should('be.visible')

})

Cypress.Commands.add('Login_invalido', function(){ // Login válido
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_123')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')

})

