import SlideRightButton from './SlideRightButton';

import orderSummaryImg from '../../assets/order-details.webp';

export default function OrderSummary({
  credits,
  subtotal,
  courierTip,
  delivery,
  isCredits,
  total,
  handleOrder,
}) {
  const summaryItems = [
    {
      title: 'subtotal',
      value: `$${subtotal.toFixed(2)}`,
    },
    {
      title: 'credits',
      value: `-$${credits.toFixed(2)}`,
      style: 'bg-light-violet p-1 rounded-[4px]',
    },
    {
      title: 'courier tip',
      value: `$${courierTip.toFixed(2)}`,
    },
    {
      title: 'delivery',
      value: delivery === 0 ? 'Free' : `$${delivery.toFixed(2)}`,
    },
  ];

  return (
    <section className='my-12 bg-white md:max-w-[26.875rem] w-full lg:rounded-3xl lg:shadow-card-shadow lg:px-6 lg:pt-8 '>
      <h3 className='font-semibold text-2xl text-center capitalize hidden lg:block'>
        order details
      </h3>
      <img
        src={orderSummaryImg}
        alt=''
        className='hidden lg:block my-6'
        aria-hidden='true'
        width={382}
        height={197}
      />
      <div className='space-y-2'>
        {summaryItems.map(({ title, value, style = '' }) => {
          if (!isCredits && title === 'credits') return null;
          return (
            <p
              key={title}
              className='font-medium text-xl flex items-center justify-between md:font-normal'
            >
              <span className='capitalize'>{title}</span>
              <span className={style}>{value}</span>
            </p>
          );
        })}
      </div>

      <p className='font-bold text-2xl flex items-center justify-between mt-12 mb-6 md:font-semibold'>
        <span className='capitalize'>total</span>
        <span>${total < 0 ? 0 : total}</span>
      </p>

      <SlideRightButton handleSubmit={handleOrder} />
      <button
        className='bg-primary-violet text-xl font-semibold text-white py-3 w-full my-3 text-center text-nowrap hover:bg-hover-violet active:bg-dark-violet rounded-lg hidden md:block'
        onClick={handleOrder}
      >
        Click to Order
      </button>
    </section>
  );
}
