import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorMessage } from '../app/components/Error';

describe('Home page component', () => {
  it('should render the main element and error message', async () => {
    const message = 'This is an error message';
    render(<ErrorMessage message={message} />);

    expect(screen.getByTestId('error-component')).toBeInTheDocument();
    expect(screen.getByTestId('error-component__message')).toHaveTextContent(message)
  });
});
