import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './css/main.css';
import './css/normalize.css'
import Main from './components/app';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(<Main />);