import './index.css'
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductRec from './ProductRec';
import * as serviceWorker from './serviceWorker';

//Display the Customer Information Submition Page
ReactDOM.render(<App />, document.getElementById('root'));

//Display the Product Information
ReactDOM.render(<ProductRec  />, document.getElementById('container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
