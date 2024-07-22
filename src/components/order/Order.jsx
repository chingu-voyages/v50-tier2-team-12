export default function OrderList({ orders }) {
  if (!orders || orders.length === 0) {
    return (
      <div>
        <p>no orders yet</p>
      </div>
    );
  }
  return (
    <section className='grid gap-7 mb-20'>
      {orders.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </section>
  );
}

function OrderItem({ name, price, dsc }) {
  return (
    <article className=''>
      <h3 className='font-medium text-xl'>{name}</h3>
      <div className='flex justify-between items-end'>
        <p className='max-w-48 text-grey'>{dsc}</p>
        <p className='font-medium text-xl'>${price}</p>
      </div>
    </article>
  );
}
