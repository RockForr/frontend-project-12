import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Error404Page from './pages/Eror404Page';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="" element={<MainPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
