import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import mainRoutes from '@constants/routes';

import Decorator from './App';
import reportWebVitals from './reportWebVitals';

import '@assets/fonts/stylesheet.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Decorator>
        <Routes>
          {mainRoutes.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </Decorator>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
