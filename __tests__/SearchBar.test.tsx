import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '../app/components/SearchBar';

describe('SearchBar component', () => {
  it('will capture the users input', async () => {
    render(<SearchBar />);

    const input = screen.getByTestId('weather-search-input');
    await userEvent.type(input, 'London');

    expect(input).toHaveValue('London');
  });
});
