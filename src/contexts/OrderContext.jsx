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
    [],
    // get orders from localstorage on initial render
    () => JSON.parse(localStorage.getItem(storageKey)) || []
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
