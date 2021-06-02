import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  test('renders "We are seeing!" at start text', () => {
    render(<Greetings />);
    const element = screen.getByText('We are seeing!');
    expect(element).toBeInTheDocument();
  });
  test('renders "Now we are seeing another thing!" if the button was clicked', () => {
    render(<Greetings />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    const element = screen.getByText('Now we are seeing another thing!');
    expect(element).toBeInTheDocument();
  });
  test('does not render "We are seeing!" if the button was clicked', () => {
    render(<Greetings />);
    const button = screen.getByRole('button');
    userEvent.click(button);

    const element = screen.queryByText('We are seeing!');
    expect(element).not.toBeInTheDocument();
  });
});
