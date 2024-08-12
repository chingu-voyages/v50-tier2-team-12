import { useState } from 'react';
import { Navigate, useAsyncValue } from 'react-router-dom';
import { Icons } from '../Icons';
import NoSearchResults from '../Search/NoSearchResults';
import MenuDesktopHeading from './MenuDesktopHeading';
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

  const noResults = searchValue.trim() !== '' && filteredMenu.length === 0;
  const backgroundImage =
    menuData.length > 0
      ? `url(${menuData[0].img})`
      : 'url(/path/to/placeholder-image.jpg)';

  return (
    <>
      <MenuDesktopHeading
        name={name}
        backgroundImage={backgroundImage}
        country={menuData.length > 0 ? menuData[0].country : ''}
      />
      <div className='w-full md:px-17'>
        <section className='my-7 w-full'>
          {noResults && <NoSearchResults />}
        </section>

        <section className='flex flex-col md:flex-row  md:justify-between  md:items-center my-8'>
          <h2 className='hidden md:block text-2xl font-semibold mb-4 md:mb-0'>
            {noResults
              ? 'Try something from our menu!'
              : 'Enjoy our delicious food!'}
          </h2>
          <div className='flex justify-center items-center'>
            <label className='row-start-2  md:col-start-8 lg:col-start-10  md:col-end-13   flex w-full bg-gray-100 items-center px-2 rounded-lg focus-within:outline-primary-violet outline outline-2 outline-transparent transition-all duration-200 transform'>
              <Icons.search className='w-6 h-6' />
              <input
                type='text'
                className='w-full bg-transparent py-2 px-4 placeholder-gray-500 font-light focus:outline-none'
                placeholder='Search for food, restaurants...'
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
            </label>
          </div>
        </section>

        <section className='grid gap-6 my-4 w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 overflow-hidden'>
          <MenuItems items={filteredMenu > 1 ? filteredMenu : menuData} />
        </section>
      </div>
    </>
  );
}
