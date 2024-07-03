import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render default button', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Hello World</Button>);

    const button = screen.getByText('Hello World');

    expect(button).toBeInTheDocument();
  });

  it('should render primary button', () => {
    const onClick = jest.fn();

    render(
      <Button variant="primary" onClick={onClick}>
        Hello World
      </Button>
    );

    const button = screen.getByText('Hello World');

    expect(button).toHaveClass('bg-primary-500');
  });

  it('should render danger button', () => {
    const onClick = jest.fn();

    render(
      <Button variant="danger" onClick={onClick}>
        Hello World
      </Button>
    );

    const button = screen.getByText('Hello World');

    expect(button).toHaveClass('bg-red-500');
  });

  it('should render a slot component', () => {
    render(
      <div>
        <Button asChild data-testid="slot">
          <p>Hello World</p>
        </Button>
      </div>
    );

    const button = screen.getByTestId('slot');

    expect(button).toBeDefined();
  });
});
