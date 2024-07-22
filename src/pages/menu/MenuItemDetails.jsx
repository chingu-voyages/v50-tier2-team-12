import { useState, useEffect } from "react";
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import { Icons } from '../../components/Icons';
import MenuItemToCart from './MenuItemToCart';
import { fetchMenuItemData } from '../../utils/MenuData';

export const loader = async ({ params }) => {
  const data = await fetchMenuItemData(params.id);
  return data;
};


export default function MenuItemDetails() {
    const { id } = useParams();
    const menuItemData = useLoaderData();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [orderSummary, setOrderSummary] = useState({
        itemName: '',
        quantity: 0
    });

    const updateOrderQuantity = (amount) => {
        setOrderSummary(prevSummary => ({
            ...prevSummary,
            quantity: prevSummary.quantity + amount
        }));
    };

    const handleOrderSubmit = (event) => {
        event.preventDefault();
        const { itemName, quantity } = orderSummary;
        if (quantity > 0){
            console.log(`Adding ${quantity} of ${itemName} to order`);
            setOrderSummary(prevSummary => ({
                ...prevSummary,
                quantity: 0
            }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderSummary(prevSummary => ({
            ...prevSummary,
            [name]: value
        }));
    };

    if (!menuItemData) {
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
                quantity={orderSummary.quantity}
                updateQuantity={updateOrderQuantity}
                handleChange={handleChange}
                handleSubmit={handleOrderSubmit}
            />

        </div>
      );
    }