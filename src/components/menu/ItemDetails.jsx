import { useState } from 'react';
import { Navigate, useAsyncValue, useParams } from 'react-router-dom';
import MenuItemToCart from './MenuItemToCart';

export default function ItemDetails() {
  const { id } = useParams();

  const menu = useAsyncValue();

  const allMenus = menu ? Object.values(menu).flat() : [];
  const [quantity, setQuantity] = useState(0);

  const menuItemData = allMenus.find((item) => item.id === id);

  const updateOrderQuantity = (amount) => {
    setQuantity((prevQuantity) => prevQuantity + amount);
  };

  const handleAddToOrder = () => {
    console.log(`Adding ${quantity} of ${menuItemData.dsc} to order`);
    setQuantity(0);
  };

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    if (quantity > 0) {
      handleAddToOrder();
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value);
  };

  if (!menuItemData) {
    return <Navigate to={'*'} />;
  }

  return (
    <>
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

      <MenuItemToCart
        quantity={quantity}
        updateQuantity={updateOrderQuantity}
        handleChange={handleQuantityChange}
        handleSubmit={handleOrderSubmit}
      />
    </>
  );
}
