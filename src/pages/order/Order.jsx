import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useOutletContext } from 'react-router-dom';
import PageHeading from '../../components/headings/PageHeading';
import CourierTips from '../../components/order/CourierTip';
import Credits from '../../components/order/Credits';
import EmptyOrder from '../../components/order/EmptyOrder';
import OrderList from '../../components/order/OrderList';
import OrderSummary from '../../components/order/OrderSummary';
import { useOrder } from '../../contexts/OrderContext';
import { cn } from '../../utils/utils';

export default function OrderPage() {
  const navigate = useNavigate();

  const [orders, dispatchOrder] = useOrder();

  const savedTip = localStorage.getItem('courier-tip') || 0;
  const [courierTip, setCourierTip] = useState(+savedTip);

  const { credits, isCredits, setIsCredits } = useOutletContext();

  const delivery = 0;

  const subtotal = orders?.reduce(
    (sum, order) => sum + order.quantity * order.price,
    0
  );

  const total = (
    subtotal +
    courierTip +
    delivery -
    (isCredits ? credits : 0)
  ).toFixed(2);

  const toggleIsCredits = () => {
    setIsCredits((prev) => !prev);
  };

  useEffect(() => {
    toast.dismiss();
  }, []);

  const handleOrder = () => {
    //handle payments

    // clear order items after successfully processing order
    dispatchOrder({ type: 'CLEAR' });
    toast.success('Your order is on the way!');
    navigate('/');
  };

  const isOrderEmpty = !orders || orders.length === 0;

  return (
    <>
      <PageHeading
        title={'your order'}
        className={cn(
          'md:h-36 xl:h-[195px] overflow-hidden relative md:flex md:flex-col md:text-left md:justify-end md:bg-light-violet md:pb-10 md:mb-0',
          isOrderEmpty && 'md:hidden'
        )}
      >
        <div className='hidden md:block absolute inset-y-0 right-0 w-1/2 ml-auto h-full'>
          <span className='absolute right-0 bottom-10 font-medium text-3xl lg:text-5xl'>
            🥐
          </span>
          <span className='absolute right-4 -top-3 font-medium text-3xl lg:text-5xl '>
            🌮
          </span>
          <span className='absolute right-12 bottom-0 font-medium text-3xl lg:text-5xl lg:right-16'>
            🥨
          </span>
          <span className='absolute right-32 bottom-7 font-medium text-3xl lg:text-5xl lg:right-36'>
            🍟
          </span>
          <span className='absolute right-24 top-5 font-medium text-3xl lg:text-5xl'>
            🥘
          </span>
          <span className='absolute right-44 -top-3 font-medium text-3xl lg:text-5xl'>
            🍕
          </span>
          <span className='absolute right-52 top-12 font-medium text-3xl lg:text-5xl lg:right-56'>
            🍔
          </span>
          <span className='absolute right-56 bottom-0 font-medium text-3xl lg:text-5xl lg:right-72'>
            🍤
          </span>
          <span className='absolute right-64 top-5 font-medium text-3xl lg:text-5xl lg:right-[19rem]'>
            🥩
          </span>
          <span className='absolute right-72 bottom-10 font-medium text-3xl lg:text-5xl lg:right-96'>
            🥗
          </span>
        </div>
      </PageHeading>
      {isOrderEmpty ? (
        <EmptyOrder />
      ) : (
        <div className='w-full lg:grid lg:grid-cols-2 md:gap-10 overflow-hidden'>
          <div className='w-full max-w-[31.625rem] md:pt-14 md:pl-17'>
            <OrderList orders={orders} />
            <CourierTips
              setCourierTip={setCourierTip}
              courierTip={courierTip}
            />
            <Credits
              credits={credits}
              isCredits={isCredits}
              toggleIsCredits={toggleIsCredits}
            />
          </div>

          <div className='md:bg-light-grey lg:grid lg:place-items-center w-full md:px-17 lg:p-0 lg:max-h-[50rem]'>
            <OrderSummary
              subtotal={subtotal}
              credits={credits}
              courierTip={courierTip}
              delivery={delivery}
              isCredits={isCredits}
              total={total}
              handleOrder={handleOrder}
            />
          </div>
        </div>
      )}
    </>
  );
}
