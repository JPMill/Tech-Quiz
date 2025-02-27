import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001', // Adjust this if needed
    specPattern: 'e2e/*.cy.js', // Path for your e2e tests
    supportFile: false,  // Disable support file for e2e
  },
  component: {
    specPattern: 'component/*.cy.jsx', // Path for your component tests
    supportFile: false, // Disable support file for component tests
  },
});