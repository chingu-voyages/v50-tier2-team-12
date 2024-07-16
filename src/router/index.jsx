import { Route } from 'react-router-dom';
import App from '../App';
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';

const routes = (
  <Route path='/' element={<App />}>
    <Route index element={<Home />} />

    {/* catch all route to handle unknown routes*/}
    {/* all other routes should be above */}
    <Route path='*' element={<Error />} />
  </Route>
);

export default routes;
