import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Person from './Person';
import Test from './TestInput';
import StateStudy from './StateStudy';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <Shop/>
    <Hello/>
    <App />
    <Hello/> 한번 만들어둔 컴포넌트는 여러번 출력 가능 
    <Test/>
    <StateStudy/>*/}
    <Person/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
