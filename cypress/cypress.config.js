import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001', 
    specPattern: 'e2e/*.cy.js', 
    supportFile: false,  
  },
  component: {
    specPattern: 'component/*.cy.jsx', 
    supportFile: false, 
  },
});