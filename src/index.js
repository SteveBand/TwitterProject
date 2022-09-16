import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import { Context } from './context';
import './index.css';

const Index = () => {
  return (
    <React.StrictMode>
      <Context>
        <App />
      </Context>
  </React.StrictMode>
  )
}


ReactDOM.render(<Index />, document.getElementById('root'));

