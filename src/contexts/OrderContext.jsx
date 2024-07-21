import { createContext, useContext, useEffect, useReducer } from 'react';
import orderReducer from '../reducers/orderReducer';

const OrderContext = createContext(null);

OrderContext.displayName = 'OrderContext';

// localstorage key for orders
const storageKey = 'orders';

export default function OrderProvider({ children }) {
  // orders state and dispatch
  const [orders, orderDispatch] = useReducer(
    orderReducer,
    [
      {
        id: 'ribs-brisket-and-burnt-ends',
        img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
        name: "Joe's KC BBQ",
        dsc: "Joe's KC Ribs, Brisket & Burnt Ends",
        price: 110.99,
        rate: 4,
        country: 'Kansas City, KS',
        quantity: 1,
      },
      {
        id: '005-kings-carolina-oink-sampler',
        img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
        name: 'Kings BBQ',
        dsc: 'Carolina BBQ Oink Sampler',
        price: 89,
        rate: 4,
        country: 'Kinston, NC',
        quantity: 1,
      },
      {
        id: 'texas-monthlys-1-bbq-brisket',
        img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131249/texas-monthlys-1-bbq-brisket.1006a061be7acae03992e420fbca995a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1',
        name: "Snow's BBQ",
        dsc: "Texas Monthly's #1 BBQ Brisket",
        price: 199,
        rate: 4,
        country: 'Lexington, TX',
        quantity: 1,
      },
    ],
    // get orders from localstorage on initial render
    (initial) => JSON.parse(localStorage.getItem(storageKey)) || initial
  );

  // side effect to update local storage everytime orders change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(orders));
  }, [orders]);

  const value = [orders, orderDispatch];

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

export function useOrder() {
  const orderContext = useContext(OrderContext);

  if (orderContext === undefined) {
    throw new Error('useoorder must be used within OrderProvider');
  }

  return orderContext;
}
