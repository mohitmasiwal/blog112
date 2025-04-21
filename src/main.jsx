import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Showdataprovider from './components/store/Showdata';

createRoot(document.getElementById('root')).render(
  <Showdataprovider>
    <App />
  </Showdataprovider>
);
