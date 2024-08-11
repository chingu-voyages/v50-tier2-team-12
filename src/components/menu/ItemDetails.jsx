import { useState } from 'react';
import { Navigate, useAsyncValue, useParams, useNavigate } from 'react-router-dom';
import { useOrder } from '../../contexts/OrderContext';
import DetailsModalWrapper from '../modals/DetailsModalWrapper';
import PageHeading from '../headings/PageHeading';
import MenuItemToCart from './MenuItemToCart'
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { cn } from '../../utils/utils';
import { Icons } from '../Icons';
import toast from "react-hot-toast";

export default function ItemDetails() {
  const { id } = useParams();
  const menu = useAsyncValue();
  const allMenus = menu ? Object.values(menu).flat() : [];
  const [_, dispatchOrder] = useOrder();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const menuItemData = allMenus.find((item) => item.id === id);

  const handleAddToOrder = () => {
    console.log('Adding ${quantity} of ${menuItemData.dsc} to order');
    dispatchOrder({
      type: 'ADD_ORDER',
      payload: {
        menu: menuItemData,
        quantity: quantity,
      },
    });
    toast('Product added to cart!', {
      icon: <Icons.cart />,
    });
    setQuantity(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddToOrder();
    goBack()
  };

  if (!menuItemData) {
    return <Navigate to={'*'} />;
  }

  const handleCloseButtonClick = () => {
    goBack()
  };

  const isNotMobileDevice = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {/* Content for mobile screens */}
        <Content 
           menuItemData={menuItemData}
           quantity={quantity}
           setQuantity={setQuantity}
           handleSubmit={handleSubmit}
          className='min-h-[calc(100vh-12rem)] md:hidden'
        />

      {/* Modal for larger screens */}
      <DetailsModalWrapper
        isDialogOpen={isNotMobileDevice}
        className='overflow-y-scroll md:w-1/2 lg:w-2/5 xl:max-w-[32rem] outline-none no-scrollbar'
        showCancel={false}
        showConfirm={false}
      >
        <button
          className='absolute right-8 top-8 group'
          onClick={handleCloseButtonClick}
          aria-label='close'
        >
          <Icons.close className='group-hover:active-link' />
        </button>
        <PageHeading title={'product details'} />
        <Content 
          menuItemData={menuItemData}
          quantity={quantity}
          setQuantity={setQuantity}
          handleSubmit={handleSubmit}
        />
      </DetailsModalWrapper>
    </>
  );
}

function Content({ menuItemData, quantity, setQuantity, handleSubmit, className = '' }) {
  return (   
    <div className={cn('flex flex-col', className)}> 
      <div className='flex-grow md:h-auto h-screen'>
        <section className='flex flex-col gap-4 py-4 px-2'>
          <div className='w-full h-18'>
            <img
              src={menuItemData.img}
              className='w-full h-52 rounded-lg object-cover'
              alt='image'
            />
          </div>
          <section className='flex flex-col gap-6 items-start'>
            <p className='text-lg font-medium'>{menuItemData.dsc}</p>
            <p className='text-xl font-medium'>${menuItemData.price}</p>
          </section>
        </section>
      </div>

      <MenuItemToCart
        quantity={quantity}
        setQuantity={setQuantity}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}