import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from "./Routes/HeroPage";
import DataPage from "./Routes/DataPage";
import HooksPage from "./Routes/HooksPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/home' element={<HeroPage />} />
      <Route path='/data' element={<DataPage />} />
      <Route path='/hooks' element={<HooksPage />} />
    </Routes>
  </BrowserRouter>,
);