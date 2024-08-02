import { useOrder } from '../../contexts/OrderContext';
import { Icons } from '../Icons';
import toast from 'react-hot-toast';

export default function OrderList({ orders }) {
  const [_, dispatchOrder] = useOrder();

  const removeOrder = (id) => {
    if (!id) return;
    
    dispatchOrder({
      type: 'REMOVE_ORDER',
      payload: id,
    });
    
    if (orders.length > 1) {
      toast('Product removed from cart!', {
        icon: <Icons.trash />,
      });
    }
  };

  const increaseQuantity = (id) => {
    dispatchOrder({
      type: 'INCREMENT_QUANTITY',
      payload: id,
    });
  };

  const decreaseQuantity = (id) => {
    dispatchOrder({
      type: 'DECREMENT_QUANTITY',
      payload: id,
    });
  };
  return (
    <section className='grid gap-7 mb-20'>
      {orders.map((order) => (
        <OrderItem 
          key={order.id} 
          {...order} 
          removeOrder={removeOrder}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </section>
  );
}

function OrderItem({ name, price, dsc, quantity, id, removeOrder, increaseQuantity, decreaseQuantity }) {

  return (
    <article>
      <div className='flex justify-between items-center mb-2'>
        <h3 className='font-medium text-xl'>{name}</h3>
        <div className="flex items-center">
          <button
            aria-label={quantity > 1 ? 'Decrease quantity by 1' : 'Remove from order'}
            type="button"
            onClick={() => quantity > 1 ? decreaseQuantity(id) : removeOrder(id)}
            className="bg-purple-100 rounded-l-lg p-3 h-8 flex items-center justify-center"
            disabled={quantity === 0}
          >
            {quantity > 1 ?
              <Icons.minus className="w-3 h-3" />
              :
              <Icons.trash className='w-4 h-4' />
            }
          </button>

          <span className="bg-purple-100 h-8 flex items-center justify-center text-purple-600 max-w-8 px-3 placeholder-purple-600 select-none">
            {quantity}
            </span>

          <button
          aria-label='remove from order'
            type="button"
            onClick={() => increaseQuantity(id)}
            className="bg-purple-100 rounded-r-lg p-3 h-8 flex items-center justify-center"
          >
            <Icons.plus className="w-3 h-3" />
          </button>
      </div>

      </div>
      <div className='flex justify-between items-end'>
        <p className='max-w-48 text-grey'>{dsc}</p>
        <p className='font-medium text-xl space-x-3'>
          <span>{quantity > 1 ? `x${quantity}` : ''}</span>
          <span>${price}</span>
        </p>
      </div>
    </article>
  );
}
