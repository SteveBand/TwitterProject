import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import '../src/assets/index.css';

const Index = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
           <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
  )
}


ReactDOM.render(<Index />, document.getElementById('root'));

