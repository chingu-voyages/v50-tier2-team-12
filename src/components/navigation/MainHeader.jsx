import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import { cn } from '../../utils/utils';
import { Icons } from '../Icons';

export default function MainHeader() {
  return (
    <header className='fixed bottom-0 w-full py-2 px-5 md:static shadow-small md:shadow-big md:flex md:items-center md:justify-between bg-white z-high md:py-5 md:px-17'>
      <Link
        to={'/'}
        aria-label='page logo'
        className='hidden md:block md:hover:active-link'
      >
        <img src={logo} alt='logo' width={156} height={26} />
      </Link>
      <nav className='grid grid-cols-4 w-full gap-1 items-end md:flex md:items-center md:gap-6 md:w-fit'>
        {navigationMenu.map((navItem) => (
          <NavItem key={navItem.title} {...navItem} />
        ))}
      </nav>

      <label className='hidden lg:flex  bg-light-grey items-center px-2 rounded-lg focus-within:outline-primary-violet  transition-all duration-200'>
        <Icons.search className='w-6 h-6' />
        <input
          type='search'
          className='w-full bg-transparent py-2 px-4 placeholder-gray-500 font-light focus:outline-none'
          placeholder='Search for food, restaurants...'
        />
      </label>
    </header>
  );
}

function NavItem({ title, href, Icon }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          `flex flex-col items-center gap-1 md:flex-row md:rounded-3xl md:py-2 md:px-4 md:gap-[2px] justify-center transition-colors duration-200 ease-linear`,
          isActive ? 'md:bg-light-violet' : 'md:hover:bg-light-violet/60'
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon className={`${isActive ? 'active-link' : ''}`} />
          <span
            className={cn(
              'capitalize font-medium text-sm',
              isActive ? 'text-primary-violet font-semibold' : 'text-grey'
            )}
          >
            {title}
          </span>
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
