import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx';
import './index.css';
/* Import Bootstrap CSS */
import 'bootstrap/dist/css/bootstrap.min.css';


const root = createRoot(document.getElementById('root')); // Ensure correct import
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
