import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupStore } from './redux';
import { clientId } from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const store = setupStore();

root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
