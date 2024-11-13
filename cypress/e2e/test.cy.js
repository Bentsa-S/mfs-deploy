import user from  '../fixtures/example.json';

describe('Auth spec', () => {
    it('Correct registration', () => {
        cy.visit('/');
        
        cy.contains('вхід').click();
        cy.url().should('include', '/login');
        
        cy.contains('Регестрація').click();
        cy.url().should('include', '/registration');
        
        cy.get('[name="name"]').type(user.userName);
        cy.get('[name="email"]').type(user.email);
        cy.get('[name="password"]').type(user.password);
        cy.get('[name="confirmPassword"]').type(user.password);
        
        cy.get('[type="submit"]').click();
        
        cy.url().should('eq', 'http://localhost:3000/');
        cy.reload();
    });

    it('Correct login', () => {
        cy.visit('/');
        
        cy.contains('вхід').click();
        cy.url().should('include', '/login');
                
        cy.get('[name="email"]').type(user.email);
        cy.get('[name="password"]').type(user.password);
        
        cy.get('[type="submit"]').click();
        
        cy.url().should('eq', 'http://localhost:3000/');
        cy.reload();
    });

    it('open phone page', () => {
        cy.visit('/');
        cy.scrollTo('bottom')

        cy.contains('Apple iPhone 16 128GB Black').click();

        cy.url().should('include', '/1')

        cy.contains('MFS').click();

        cy.url().should('include', '/')
    })

    it('open about page', () => {
        cy.visit('/');
        cy.contains('розширена інформація').click();
        cy.contains('MFS').click();

        cy.url().should('include', '/')
    })

});