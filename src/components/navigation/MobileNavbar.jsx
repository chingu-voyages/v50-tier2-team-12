import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Icons } from '../Icons';
import { useOrder } from '../../contexts/OrderContext';

export default function Navbar() {
  const [orders, _] = useOrder();
  const [orderLength, setOrderLength] = useState(0);

  useEffect(() => {
    let totalQuantity = 0;
    
    orders.forEach(item => {
      totalQuantity += item.quantity;
    });

    setOrderLength(totalQuantity);
  }, [orders]);

  return (
    <nav className='grid grid-cols-4 fixed bottom-0 w-full bg-white py-2 md:hidden font-work-sans px-5 gap-1 items-end z-[1000]'>
      {navigationMenu.map((navItem) => (
        <NavItem key={navItem.title} {...navItem} orderLength={orderLength} />
      ))}
    </nav>
  );
}

function NavItem({ title, href, Icon, orderLength }) {
  return (
    <NavLink to={href} className={`flex flex-col items-center gap-1`}>
      {({ isActive }) => (
        <>
         {title === 'order' ? (
            <div className='flex flex-col items-center gap-1 relative'>
              <Icon className={`${isActive ? 'active-link' : ''}`} />
              {orderLength > 0 && (
                <span className='absolute top-0 right-2 transform translate-x-1/2 -translate-y-1/2 bg-primary-violet text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold text-xs'>
                  {orderLength}
                </span>
              )}
              <span
                className={`${
                  isActive ? 'text-primary-violet' : 'text-grey'
                } capitalize font-medium text-sm`}
              >
                {title}
              </span>
            </div>
          ) : (
            <>
          <Icon className={`${isActive ? 'active-link' : ''}`} />
          <span
            className={`${
              isActive ? 'text-primary-violet' : 'text-grey'
            } capitalize font-medium text-sm`}
          >
            {title}
          </span>
          </>
          )}
        </>
      )}
    </NavLink>
  );
}

const navigationMenu = [
  {
    title: 'home',
    href: '/',
    Icon: Icons.home,
  },
  {
    title: 'map',
    href: '/map',
    Icon: Icons.map,
  },

  {
    title: 'credits',
    href: '/credits',
    Icon: Icons.circle,
  },
  {
    title: 'order',
    href: '/order',
    Icon: Icons.cart,
  },
];
