import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import '@assets/fonts/stylesheet.css'
import App from '@/App';
import reportWebVitals from '@/reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ClassApp from "@/AppClass";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
           <Route path={'/*'} element={<Navigate to={'/func/home'} replace/>}/>
           <Route path={'/func/*'} element={<App/>}/>
           <Route path={'/class/*'} element={<ClassApp/>}/>
       </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
