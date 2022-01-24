/**
 * Index.js
 *
 * authored by Daniel Cheng dcheng47@gmail.com
 */

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PP from './components/pp';
import './index.scss';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <PP/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
