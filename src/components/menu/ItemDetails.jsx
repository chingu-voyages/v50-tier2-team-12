import { useState } from 'react';
import { Navigate, useAsyncValue, useParams } from 'react-router-dom';
import { useOrder } from '../../contexts/OrderContext';
import MenuItemToCart from './MenuItemToCart';

export default function ItemDetails() {
  const { id } = useParams();

  const menu = useAsyncValue();

  const allMenus = menu ? Object.values(menu).flat() : [];
  const [_, dispatchOrder] = useOrder();

  const [quantity, setQuantity] = useState(0);

  const menuItemData = allMenus.find((item) => item.id === id);

  const handleAddToOrder = () => {
    if (quantity > 0) {
      console.log(`Adding ${quantity} of ${menuItemData.dsc} to order`);
      dispatchOrder({
        type: 'ADD_ORDER',
        payload: {
          menu: menuItemData,
          quantity: quantity,
        },
      });
      setQuantity(0);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAddToOrder();
  };

  if (!menuItemData) {
    return <Navigate to={'*'} />;
  }

  return (
    <>
      <div className='flex-grow'>
        <section className='flex flex-col gap-4 py-4 px-2'>
          <div className='w-full h-18'>
            <img
              src={menuItemData.img}
              className='w-full h-52 rounded-lg object-cover'
              alt='image'
            />
          </div>
          <section className='flex flex-col gap-3 items-start'>
            <p className='font-bold'>{menuItemData.dsc}</p>
            <p className='font-bold'>${menuItemData.price}</p>
          </section>
        </section>
      </div>

      <MenuItemToCart
        quantity={quantity}
        setQuantity={setQuantity}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
