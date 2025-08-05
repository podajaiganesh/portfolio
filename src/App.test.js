import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders portfolio content', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Check for portfolio-specific content
  const nameElement = screen.getByText(/Jai Ganesh Poda/i);
  expect(nameElement).toBeInTheDocument();
});
