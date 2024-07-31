import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from '../App';
import ErrorBoundary from '../components/ErrorBoundary';
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';
import Menu from '../pages/menu/Menu';
import MenuItemDetails from '../pages/menu/MenuItemDetails';
import Order from '../pages/order/Order';
import { fetchMenus } from '../utils/utils';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}
      id={'menu'}
      loader={fetchMenus}
      errorElement={ErrorBoundary}
    >
      <Route index element={<Home />} />
      <Route path='/restaurants/:name' element={<Menu />} />
      <Route path='/menu/:id' element={<MenuItemDetails />} />
      <Route path='order' element={<Order />} />

      {/* catch all route to handle unknown routes*/}
      {/* all other routes should be above */}
      <Route path='*' element={<Error />} />
    </Route>
  )
);

export default router;
