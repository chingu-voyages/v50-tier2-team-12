import { useState } from 'react';
import { Navigate, useAsyncValue } from 'react-router-dom';
import { Icons } from '../Icons';
import MenuItems from './menuItems';

export default function Restaurants({ name }) {
  const menu = useAsyncValue();

  const [searchValue, setSearchValue] = useState('');
  const allMenus = menu ? Object.values(menu).flat() : [];

  const menuData = allMenus.reduce((menuData, item) => {
    if (item.name === name && !menuData.some((menu) => menu.id === item.id)) {
      menuData.push(item);
    }
    return menuData;
  }, []);

  const filteredMenu = menuData.filter((item) =>
    item.dsc.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (!menuData || menuData.length == 0) {
    return <Navigate to={'*'} />;
  }

  return (
    <>
      <section className='flex justify-center items-center my-8'>
        <div className='w-full max-w-xl bg-gray-100 flex items-center px-4 rounded-lg'>
          <button aria-label='search'>
            <Icons.search className='w-6 h-6' />
          </button>
          <input
            type='search'
            className='w-full bg-gray-100 py-2 px-4 rounded-lg placeholder-gray-500 font-light focus:outline-none'
            placeholder='Search for food, restaurants...'
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
      </section>

      <section className='flex flex-col gap-6 my-4'>
        {searchValue.trim() !== '' && filteredMenu.length === 0 ? (
          <p className='text-gray-500 text-center'>
            No items found matching your search.
          </p>
        ) : (
          <MenuItems items={filteredMenu} />
        )}
      </section>
    </>
  );
}