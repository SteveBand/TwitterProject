import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import { Context } from './contexts/context';
import '../src/assets/index.css';

const Index = () => {
  return (
    <React.StrictMode>
     <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
  )
}


ReactDOM.render(<Index />, document.getElementById('root'));

