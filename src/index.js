import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Crud from './components/crud.jsx'
import Students from './components/mock';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Crud />
    <Students />
  </React.StrictMode>
);

