import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Icons } from '../../components/Icons';
import MenuItemToCart from '../../components/menu/MenuItemToCart';
import { useRouteLoaderData } from 'react-router-dom';
import { useOrder } from '../../contexts/OrderContext';

export default function MenuItemDetails() {
    const menu = useRouteLoaderData('menu');
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const allMenus = menu ? Object.values(menu).flat() : [];
    const menuItemData = allMenus.find(item => item.id === id);
    const [_, dispatchOrder] = useOrder();
    const [quantity, setQuantity] = useState(0)
  
    useEffect(() => {
      setLoading(true);
      if (id && !allMenus.some(item => item.id === id)) {
          navigate('/error'); // Redirect to error page if id doesn't exist
          return;
      }
      setLoading(false); 
  }, []);
  
    const handleAddToOrder = () => {
      if (quantity > 0) {
          console.log(`Adding ${quantity} of ${menuItemData.dsc} to order`);
          dispatchOrder({
              type: 'ADD_ORDER',
              payload: {
                menu: menuItemData,
                quantity: quantity
              }
          });
          setQuantity(0); 
      }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    handleAddToOrder();
  };


    if (loading) {
      return <p>Loading...</p>;
  }
    return (
        <div className="max-w-md mx-auto flex flex-col min-h-screen">
          <div className="flex-grow">
            <section className="grid grid-cols-3 gap-4 mt-5 mb-2 items-center">
              <button onClick={goBack} className="flex items-center">
                <Icons.back className="w-6 h-6" />
              </button>
              <h2 className="col-span-2 capitalize font-work-sans font-semibold text-2xl text-black">
                Product Details
              </h2>
            </section>

            <section className="flex flex-col gap-4 py-4 px-2">
              <div className="w-full h-18">
                <img
                  src={menuItemData.img}
                  className="w-full h-52 rounded-lg object-cover"
                  alt="image"
                />
              </div>
              <section className="flex flex-col gap-3 items-start">
                <p className="font-bold">{menuItemData.dsc}</p>
                <p className="font-bold">${menuItemData.price}</p>
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