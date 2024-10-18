/// <reference types="Cypress" />
describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html');
    })
    it('verifica o título da aplicação', function() {
        
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT');
    })
    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longtest = 'TextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTestTextForTest';
        const shorttest = 'TextForTest';
        cy.xpath("//input[@name='firstName']").type('Matheus',{delay: 0});
        cy.xpath("//input[@name='lastName']").type('Barbosa',{delay: 0});
        cy.xpath("//input[@id='email']").type('qamatheusvalidation@gmail.com',{delay: 0});
        cy.xpath("//input[@id='phone']").type('3111111111',{delay: 0});
        cy.xpath("//textarea[@name='open-text-area']").type(shorttest, {delay: 0});
        cy.xpath("//button[text()='Enviar']").click();
        cy.xpath("//span[@class='success']").should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',function(){
        cy.xpath("//input[@name='firstName']").type('Matheus',{delay: 0});
        cy.xpath("//input[@name='lastName']").type('Barbosa',{delay: 0});
        cy.xpath("//input[@id='email']").type('qamatheusvalidation@gmailcom',{delay: 0});
        cy.xpath("//input[@id='phone']").type('3111111111',{delay: 0});
        cy.xpath("//textarea[@name='open-text-area']").type('shorttest', {delay: 0});
        cy.xpath("//button[text()='Enviar']").click();
        cy.xpath("//span[@class='error']").should('be.visible')
    })
    it('Verifica se o campo telefone pode receber uma string de texto', function(){
        cy.xpath("//input[@id='phone']").type('Text').should('have.value','');
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){
        cy.xpath("//input[@name='firstName']").type('Matheus',{delay: 0});
        cy.xpath("//input[@name='lastName']").type('Barbosa',{delay: 0});
        cy.xpath("//input[@id='email']").type('qamatheusvalidation@gmail.com',{delay: 0});
        cy.xpath("//input[@id='phone-checkbox']").check();
        cy.xpath("//textarea[@name='open-text-area']").type('testforTest', {delay: 0});
        cy.xpath("//button[text()='Enviar']").click();
        cy.xpath("//span[@class='error']").should('be.visible')
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone',function(){
        cy.xpath("//input[@name='firstName']").type('Matheus',{delay: 0}).should('have.value','Matheus').clear().should('have.value','');
        cy.xpath("//input[@name='lastName']").type('Barbosa',{delay: 0}).should('have.value','Barbosa').clear().should('have.value','');
        cy.xpath("//input[@id='email']").type('qamatheusvalidation@gmail.com',{delay: 0}).should('have.value','qamatheusvalidation@gmail.com').clear().should('have.value','');
        cy.xpath("//input[@id='phone']").type('3111111111',{delay: 0}).should('have.value','3111111111').clear().should('have.value','');
        cy.xpath("//textarea[@name='open-text-area']").type('shorttest', {delay: 0}).should('have.value','shorttest').clear().should('have.value','');
        cy.xpath("//button[text()='Enviar']").click();
        //cy.xpath("//span[@class='success']").should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',function(){
        cy.xpath("//button[text()='Enviar']").click();
        cy.xpath("//span[@class='error']").should('be.visible')
    })
    it('envia o formuário com sucesso usando um comando customizado',function(){
        cy.fillMandatoryFieldsAndSubmit();
        cy.xpath("//span[@class='success']").should('be.visible')
    })
    it('Clicando em botão utilizando comando contains',function(){
        cy.xpath("//input[@name='firstName']").type('Matheus',{delay: 0});
        cy.xpath("//input[@name='lastName']").type('Barbosa',{delay: 0});
        cy.xpath("//input[@id='email']").type('qamatheusvalidation@gmail.com',{delay: 0});
        cy.xpath("//input[@id='phone']").type('3111111111',{delay: 0});
        cy.xpath("//textarea[@name='open-text-area']").type('shorttest', {delay: 0});
        cy.contains('button','Enviar').click();
        cy.xpath("//span[@class='success']").should('be.visible')
    })
    it('Clicando em botão utilizando comando contains/xpath version',function(){
        cy.xpath("//input[@name='firstName']").type('Matheus',{delay: 0});
        cy.xpath("//input[@name='lastName']").type('Barbosa',{delay: 0});
        cy.xpath("//input[@id='email']").type('qamatheusvalidation@gmail.com',{delay: 0});
        cy.xpath("//input[@id='phone']").type('3111111111',{delay: 0});
        cy.xpath("//textarea[@name='open-text-area']").type('shorttest', {delay: 0});
        cy.xpath("//button[contains(text(), 'Enviar')]").click();
        cy.xpath("//span[@class='success']").should('be.visible')
    })
    it('seleciona um produto (YouTube) por seu texto',function(){
        cy.get('select').select('YouTube').should('have.value','youtube');
    })
    it('seleciona um produto (Mentoria) por seu valor (value)',function(){
        cy.get('select').select('mentoria').should('have.value','mentoria');
    })
    it('seleciona um produto (Blog) por seu índice',function(){
        cy.get('select').select(1).should('have.value','blog');
    })
    it('marca o tipo de atendimento "Feedback"',function(){
        cy.xpath("//input[@value='feedback']").check().should('have.value','feedback');
    })
    it('marca cada tipo de atendimento',function(){
        cy.xpath("//input[@type='radio']").should('have.length',3)
        .each(function($radio){
            cy.wrap($radio).check();
            cy.wrap($radio).should('be.checked');
        })
    })
    it('marca ambos checkboxes, depois desmarca o último',function(){
        cy.xpath("//input[@type='checkbox']")
        .should('have.length',2)
        .each(function($checkbox){
            cy.wrap($checkbox).check();
            cy.wrap($checkbox).should('be.checked');
        })
        .last().uncheck().should('not.be.checked');
    })
    it('seleciona um arquivo da pasta fixtures',function(){
        cy.xpath("//input[@id='file-upload']").click().should('have.id','file-upload')
        .should(function($input){ // Verifica que o elemento do file upload não possui arquivo selecionado
            // console.log($input);
            expect($input[0].files.length).to.equal(0)
            
        })
        .selectFile('cypress/fixtures/example.json')
        .should(function($input){ // Verifica que o elemento do file upload possui arquivo selecionado
            // console.log($input);
            expect($input[0].files[0].name).to.equal('example.json')
            
        })
    })
    it('seleciona um arquivo simulando um drag-and-drop',function(){
        cy.xpath("//input[@id='file-upload']").click().should('have.id','file-upload')
        .should(function($input){ // Verifica que o elemento do file upload não possui arquivo selecionado
            // console.log($input);
            expect($input[0].files.length).to.equal(0)
            
        })
        .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input){ // Verifica que o elemento do file upload possui arquivo selecionado
            console.log($input);
            expect($input[0].files[0].name).to.equal('example.json')
            
        })
    })
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias',function(){
        cy.fixture("example.json").as('fileupload');
        cy.xpath("//input[@id='file-upload']").click().should('have.id','file-upload')
        .should(function($input){ // Verifica que o elemento do file upload não possui arquivo selecionado
            // console.log($input);
            expect($input[0].files.length).to.equal(0)
            
        })
        .selectFile('@fileupload')
        .should(function($input){ // Verifica que o elemento do file upload possui arquivo selecionado
            console.log($input);
            expect($input[0].files[0].name).to.equal('example.json')
            
        })
    })
    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',function(){
        cy.xpath("//a[text()='Política de Privacidade']").should('have.attr', 'target', '_blank');
    })
    it('acessa a página da política de privacidade removendo o target e então clicando no link',function(){
        cy.xpath("//a[text()='Política de Privacidade']").should('have.attr', 'target', '_blank').invoke('removeAttr', 'target')
        .should('not.have.attr', 'target'); //Verifica se existe o attributo removiado anteriormente pelo invoke
    })
  })