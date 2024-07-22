import { Route } from 'react-router-dom';
import App from '../App';
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';
import Menu from '../pages/menu/Menu';
import MenuItemDetails from '../pages/menu/MenuItemDetails';
import Order from '../pages/order/Order';

const routes = (
  <Route path='/' element={<App />}>
    <Route index element={<Home />} />
    <Route path="/:restaurantName" element={<Menu />}/>
    <Route path="/:restaurantName/:id" element={<MenuItemDetails />} />
    <Route path='order' element={<Order />} />

    {/* catch all route to handle unknown routes*/}
    {/* all other routes should be above */}
    <Route path='*' element={<Error />} />
  </Route>
);

export default routes;
