import { act, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import user from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { clientId } from '../constants';
import CharactersPage from '../pages/CharactersPage/CharactersPage';
import { setupStore } from '../redux';

describe('Characters Page', () => {
  window.scrollTo = jest.fn();
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  test('renders correctly', () => {
    render(
      <Provider store={setupStore()}>
        <GoogleOAuthProvider clientId={clientId}>
          <BrowserRouter>
            <CharactersPage />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </Provider>,
    );
    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });

  test('search input changes value', async () => {
    user.setup();
    render(
      <Provider store={setupStore()}>
        <GoogleOAuthProvider clientId={clientId}>
          <BrowserRouter>
            <CharactersPage />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </Provider>,
    );

    const searchInput = screen.getByRole('searchbox');
    const textValue = 'Rick and Morty';
    await act(() => user.type(searchInput, textValue));
    expect(searchInput).toHaveValue(textValue);
  });
});
