it.only('testa a página da política de privacidade de forma independente',function(){
    cy.visit('./src/privacy.html');
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT - Política de privacidade');
    cy.contains('Talking About Testing').should('be.visible');
    cy.xpath("//p[text()='Não salvamos dados submetidos no formulário da aplicação CAC TAT.']").should('have.text','Não salvamos dados submetidos no formulário da aplicação CAC TAT.');
    cy.xpath("//p[text()='Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.']").should('have.text','Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.');
    cy.xpath("//p[text()='No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.']").should('have.text','No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.')
})