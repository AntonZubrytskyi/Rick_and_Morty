import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { setupStore } from '../redux';
import { clientId } from '../constants';
import CharacterDetailsPage from '../pages/CharacterDetailsPage/CharacterDetailsPage';

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
            <CharacterDetailsPage />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </Provider>,
    );
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();

    const paragraph = screen.getByText('Information');
    expect(paragraph).toBeInTheDocument();

    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
  });
});
