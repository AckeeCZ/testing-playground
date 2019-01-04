// TODO find out how to import
// import config from '../../src/app/config';
// const { api } = config;

describe('Contact form', () => {
    it('should log in with right email and pass', () => {
        cy.visit('/auth');

        // Fill in values and submit from
        cy.get('form').within(() => {
            cy.get('input[name="email"]').type('admin@ackee.cz');
            cy.get('input[name="password"]').type('ackeeadmin');
            cy.get('#submitButton').click();
        });
        // Shows success view with reset
        cy.get('#userEmail').should('be.visible');
        cy.get('#logoutBtn').click();
    });

    it('should not log in with wrong email or pass', () => {
        cy.visit('/auth');

        // Fill in values and submit from
        cy.get('form').within(() => {
            cy.get('input[name="email"]').type('nonexist@ackee.cz');
            cy.get('input[name="password"]').type('ackeeadmin');
            cy.get('#submitButton').click();
        });
        // If error is visible
        cy.get('.logError').should('be.visible');
    });
});
