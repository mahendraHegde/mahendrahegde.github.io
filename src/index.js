import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
console.log(`baseName = ${process.env.PUBLIC_URL}`)
