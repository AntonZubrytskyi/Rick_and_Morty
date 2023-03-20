import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharacterDetailsPage from './pages/CharacterDetailsPage/CharacterDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { RoutePath } from './constants';
import LoginPage from './pages/LoginPage/LoginPage';
import { localStorageHelper } from './helpers';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';

const App: FC = () => {
  const isAuthenticated = localStorageHelper.getFromLocalStorage('accessToken');

  return (
    <Routes>
      <Route
        index
        path="/"
        element={isAuthenticated
          ? <Navigate to={RoutePath.CHARACTERS} /> : <Navigate to={RoutePath.LOGIN} />}
      />
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route path={RoutePath.CHARACTERS} element={<CharactersPage />} />
          <Route path={RoutePath.CHARACTERS_DETAILS} element={<CharacterDetailsPage />} />
        </Route>
        <Route path="/" element={<PublicRoute />}>
          <Route index path={RoutePath.LOGIN} element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
