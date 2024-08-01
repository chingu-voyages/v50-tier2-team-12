import { Route } from 'react-router-dom';
import App from '../App';
import ErrorBoundary from '../components/ErrorBoundary';
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';
import MapPage from '../pages/map/Map';
import Menu from '../pages/menu/Menu';
import MenuItemDetails from '../pages/menu/MenuItemDetails';
import Order from '../pages/order/Order';
import { fetchMenus } from '../utils/utils';

const routes = (
  <Route
    path='/'
    element={<App />}
    id={'menu'}
    loader={fetchMenus}
    errorElement={ErrorBoundary}
    shouldRevalidate={() => false}
  >
    <Route index element={<Home />} />
    <Route path='/restaurants/:name' element={<Menu />} />
    <Route path='/menu/:id' element={<MenuItemDetails />} />
    <Route path='order' element={<Order />} />

    <Route path='map' element={<MapPage />} />

    {/* catch all route to handle unknown routes*/}
    {/* all other routes should be above */}
    <Route path='*' element={<Error />} />
  </Route>
);

export default routes;
