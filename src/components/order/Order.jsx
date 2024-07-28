import { useOrder } from '../../contexts/OrderContext';
import { Icons } from '../Icons';

export default function OrderList({ orders }) {
  return (
    <section className='grid gap-7 mb-20'>
      {orders.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </section>
  );
}

function OrderItem({ name, price, dsc, quantity, id }) {
  const [_, dispatchOrder] = useOrder();

  const removeOrder = (id) => {
    if (!id) return;

    dispatchOrder({
      type: 'REMOVE_ORDER',
      payload: id,
    });
  };
  return (
    <article className=''>
      <div className='flex justify-between items-center mb-2'>
        <h3 className='font-medium text-xl'>{name}</h3>
        <button
          aria-label='remove from order'
          className='group'
          onClick={() => removeOrder(id)}
        >
          <Icons.trash className='group-hover:active-link group-active:active-link' />
        </button>
      </div>
      <div className='flex justify-between items-end'>
        <p className='max-w-48 text-grey'>{dsc}</p>
        <p className='font-medium text-xl space-x-3'>
          <span>x{quantity}</span>
          <span>${price}</span>
        </p>
      </div>
    </article>
  );
}
