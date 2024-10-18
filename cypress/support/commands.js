Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.xpath("//input[@name='firstName']").type('Matheus',{delay: 0});
    cy.xpath("//input[@name='lastName']").type('Barbosa',{delay: 0});
    cy.xpath("//input[@id='email']").type('qamatheusvalidation@gmail.com',{delay: 0});
    cy.xpath("//input[@id='phone']").type('3111111111',{delay: 0});
    cy.xpath("//textarea[@name='open-text-area']").type('shorttest', {delay: 0});
    cy.xpath("//button[text()='Enviar']").click();
})