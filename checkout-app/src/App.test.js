import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page content', () => {
  render(<App />);
  const headingElement = screen.getByText(/Professional services/i);
  expect(headingElement).toBeInTheDocument();
});
