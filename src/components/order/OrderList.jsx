import toast from 'react-hot-toast';
import { useOrder } from '../../contexts/OrderContext';
import { Icons } from '../Icons';

export default function OrderList({ orders }) {
  const [_, dispatchOrder] = useOrder();

  const removeOrder = (id) => {
    if (!id || orders.length === 0) return;

    dispatchOrder({
      type: 'REMOVE_ORDER',
      payload: id,
    });

    toast('Product removed from cart!', {
      icon: <Icons.trash />,
    });
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
    <section className=''>
      <h3 className='hidden md:block font-semibold text-2xl capitalize mb-4'>
        selected items
      </h3>
      <div className='space-y-7 mb-20'>
        {orders.map((order) => (
          <OrderItem
            key={order.id}
            {...order}
            removeOrder={removeOrder}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </div>
    </section>
  );
}

function OrderItem({
  name,
  price,
  dsc,
  quantity,
  id,
  removeOrder,
  increaseQuantity,
  decreaseQuantity,
  img,
}) {
  return (
    <article className='md:shadow-card-shadow grid  grid-cols-2 md:grid-cols-3 place-content-between md:rounded-2xl md:p-4 gap-4'>
      <img
        src={img}
        alt={id}
        className='hidden md:block rounded-lg bg-[#ececec] object-cover max-h-[104px]'
        width={149}
        height={104}
      />

      <div className='space-y-2'>
        <h3 className='font-medium text-xl  truncate'>{name}</h3>
        <p className='max-w-48 line-clamp-2 text-balance text-grey'>{dsc}</p>
      </div>
      <div className='flex justify-between items-end flex-col'>
        <div className='flex items-center'>
          <button
            aria-label={
              quantity > 1 ? 'Decrease quantity by 1' : 'Remove from order'
            }
            type='button'
            onClick={() =>
              quantity > 1 ? decreaseQuantity(id) : removeOrder(id)
            }
            className='bg-purple-100 rounded-l-lg p-3 h-8 flex items-center justify-center'
            disabled={quantity === 0}
          >
            {quantity > 1 ? (
              <Icons.minus className='w-3 h-3' />
            ) : (
              <Icons.trash className='w-4 h-4' />
            )}
          </button>

          <span className='bg-purple-100 h-8 flex items-center justify-center text-purple-600 max-w-8 px-3 placeholder-purple-600 select-none'>
            {quantity}
          </span>

          <button
            aria-label='remove from order'
            type='button'
            onClick={() => increaseQuantity(id)}
            className='bg-purple-100 rounded-r-lg p-3 h-8 flex items-center justify-center'
          >
            <Icons.plus className='w-3 h-3' />
          </button>
        </div>
        <p className='font-medium text-xl space-x-3'>
          <span>{quantity > 1 ? `x${quantity}` : ''}</span>
          <span>${price}</span>
        </p>
      </div>
    </article>
  );
}
