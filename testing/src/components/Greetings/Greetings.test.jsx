import { render, screen } from '@testing-library/react';
import Greetings from '.';

// Three A's

describe('Greeting component', () => {
  test('renders hello world as a text', () => {
    // Arrange
    render(<Greetings />);
    // Act

    // Assert
    const element = screen.getByText('hello world', { exact: false });
    expect(element).toBeInTheDocument();
  });
});
