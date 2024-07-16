import { NavLink } from 'react-router-dom';
import { Icons } from '../Icons';

export default function Navbar() {
  return (
    <nav className='grid grid-cols-4 fixed bottom-0 w-full bg-white py-2 md:hidden font-work-sans px-5 gap-1 items-end z-[1000]'>
      {navigationMenu.map((navItem) => (
        <NavItem key={navItem.title} {...navItem} />
      ))}
    </nav>
  );
}

function NavItem({ title, href, Icon }) {
  return (
    <NavLink to={href} className={'flex flex-col items-center gap-1'}>
      {Icon ? <Icon className={'text-[#1C1B1F]'} /> : null}
      <span className='capitalize font-medium text-sm'>{title}</span>
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
    href: '/',
    Icon: Icons.map,
  },

  {
    title: 'credits',
    href: '/',
    Icon: Icons.circle,
  },
  {
    title: 'order',
    href: '/order',
    Icon: Icons.cart,
  },
];
