import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import OrderProvider from './contexts/OrderContext';
import './index.css';
import routes from './router/';

const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OrderProvider>
      <RouterProvider router={router} />
    </OrderProvider>
  </React.StrictMode>
);
