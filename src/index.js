import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './utils/Appstore.ts';
import { router } from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router}>
    <App/>
  </RouterProvider>
  </Provider>

);

