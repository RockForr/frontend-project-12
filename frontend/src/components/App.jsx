import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage.jsx';
import MainPage from '../pages/MainPage.jsx';
import Error404Page from '../pages/Eror404Page.jsx';
import NavBar from './NavBar.jsx';
import SignUpPage from '../pages/SignUpPage.jsx';
import routes from '../routes.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.home()} element={<NavBar />}>
        <Route index element={<MainPage />} />
        <Route path={routes.login()} element={<LoginPage />} />
        <Route path={routes.signUp()} element={<SignUpPage />} />
        <Route path="*" element={<Error404Page />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;