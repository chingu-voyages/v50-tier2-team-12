import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import OrderProvider from './contexts/OrderContext';
import './index.css';
import router from './router/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrderProvider>
      <RouterProvider router={router} />
    </OrderProvider>
  </React.StrictMode>
);
