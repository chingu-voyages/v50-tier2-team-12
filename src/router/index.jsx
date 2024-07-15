import { Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';

const routes = (
  <Route path='/' element={<App />}>
    <Route index element={<Home />} />
  </Route>
);

export default routes;
