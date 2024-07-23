import { Route } from 'react-router-dom';
import App from '../App';
import ErrorBoundary from '../components/ErrorBoundary';
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';
import Order from '../pages/order/Order';
import { fetchMenus } from '../utils/utils';

const routes = (
  <Route
    path='/'
    element={<App />}
    id={'menu'}
    loader={fetchMenus}
    errorElement={ErrorBoundary}
  >
    <Route index element={<Home />} />
    <Route path='order' element={<Order />} />

    {/* catch all route to handle unknown routes*/}
    {/* all other routes should be above */}
    <Route path='*' element={<Error />} />
  </Route>
);

export default routes;
