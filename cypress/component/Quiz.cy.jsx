describe('Quiz Component', () => {
    beforeEach(() => {
      // Mock the API request for questions to ensure consistent data during tests
      cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
      cy.visit('/'); 
      cy.wait('@getQuestions'); 
    });
  
    it('renders the start button', () => {
      // Ensure that the start button is visible when the quiz is not yet started
      cy.get('button.btn-primary').contains('Start Quiz', { timeout: 10000 }).should('be.visible');  
    });
  
    it('starts the quiz when the start button is clicked', () => {
      // Click the start button and verify that questions start showing up
      cy.get('button.btn-primary').contains('Start Quiz').click();
      cy.get('.card h2').should('not.have.text', 'Start Quiz');  
    });
  
    it('advances to the next question when an answer is clicked', () => {
      // Start the quiz
      cy.get('button.btn-primary').contains('Start Quiz').click();
  
      // Answer the first question
      cy.get('.btn-primary').first().click();  
      cy.get('.card h2').should('not.have.text', 'Question 1');  
    });
  
    it('shows score when quiz is completed', () => {
      // Start the quiz
      cy.get('button.btn-primary').contains('Start Quiz').click();
  
      // Answer all the questions
      cy.get('.btn-primary').each((button) => {
        cy.wrap(button).click();
      });
  
      // Once all questions are answered, check that the score is displayed
      cy.get('.alert.alert-success').should('contain', 'Your score:');
    });
  
    it('allows the user to start a new quiz after completion', () => {
      // Start the quiz
      cy.get('button.btn-primary').contains('Start Quiz').click();
  
      // Answer all questions
      cy.get('.btn-primary').each((button) => {
        cy.wrap(button).click();
      });
  
      // Check if the "Take New Quiz" button is displayed after quiz completion
      cy.get('button.btn-primary').contains('Take New Quiz').should('be.visible');
  
      // Click the "Take New Quiz" button and verify the quiz restarts
      cy.get('button.btn-primary').contains('Take New Quiz').click();
      cy.get('button.btn-primary').contains('Start Quiz').should('be.visible');
    });
  });