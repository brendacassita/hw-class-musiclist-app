import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import DropDown from './pages/DropDown';
import CardPage from './pages/CardPage';
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/dropdown' element={<DropDown/>}/>
      <Route path='/cardpage' element={<CardPage/>}/>
      
    </Route>
  </Routes>
  </BrowserRouter>,
   
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
