import { screen, render } from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom';

describe('Home page component', () => {
  it('should render the main element', async () => {
    render(<Home />);

    expect(screen.getByTestId('main-element')).toBeInTheDocument();
  });
});
