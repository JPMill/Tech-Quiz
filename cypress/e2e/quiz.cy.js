describe('Quiz Component', () => {
    it('should display the quiz question', () => {
        cy.visit('http://localhost:3001');
        cy.contains('Start Quiz', { timeout: 10000 }).should('be.visible');
    });
  
    // Add more tests as needed
  });