import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useOutletContext } from 'react-router-dom';
import PageHeading from '../../components/headings/PageHeading';
import CourierTipModal from '../../components/modals/CourierTipModal';
import CourierTips from '../../components/order/CourierTip';
import Credits from '../../components/order/Credits';
import EmptyOrder from '../../components/order/EmptyOrder';
import OrderList from '../../components/order/OrderList';
import OrderSummary from '../../components/order/OrderSummary';
import SlideRightButton from '../../components/order/SlideRightButton';
import { useOrder } from '../../contexts/OrderContext';

export default function OrderPage() {
  const [orders] = useOrder();
  const [courierTip, setCourierTip] = useState(0);

  const { credits, isCredits, setIsCredits } = useOutletContext();

  const [isTipModalOpen, setIsTipModalOpen] = useState(false);

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
    // temporary user success
    console.log(courierTip, total, orders);
    toast.success('Your order is on the way!');
  };

  const isOrderEmpty = !orders || orders.length === 0;

  return (
    <>
      <PageHeading
        title={'your order'}
        className={isOrderEmpty && 'md:hidden'}
      />
      {isOrderEmpty ? (
        <EmptyOrder />
      ) : (
        <>
          <OrderList orders={orders} />
          <CourierTips
            setCourierTip={setCourierTip}
            setIsTipModalOpen={setIsTipModalOpen}
            courierTip={courierTip}
          />
          <Credits
            credits={credits}
            isCredits={isCredits}
            toggleIsCredits={toggleIsCredits}
          />

          <OrderSummary
            subtotal={subtotal}
            credits={credits}
            courierTip={courierTip}
            delivery={delivery}
            isCredits={isCredits}
          />

          <p className='font-bold text-2xl flex items-center justify-between my-7'>
            <span className='capitalize'>total</span>
            <span>${total < 0 ? '0' : total}</span>
          </p>

          <SlideRightButton handleSubmit={handleOrder} />

          <CourierTipModal
            isOpen={isTipModalOpen}
            setCourierTip={setCourierTip}
            setIsOpen={setIsTipModalOpen}
          />
        </>
      )}
    </>
  );
}
