import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard.jsx';

test('renders learn react link', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});