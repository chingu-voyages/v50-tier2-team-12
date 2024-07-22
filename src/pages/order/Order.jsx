import { useState } from 'react';
import PageHeading from '../../components/headings/PageHeading';
import CourierTipModal from '../../components/modals/CourierTipModal';
import CourierTips from '../../components/order/CourierTip';
import Credits from '../../components/order/Credits';
import OrderList from '../../components/order/Order';
import OrderSummary from '../../components/order/OrderSummary';
import SlideRightButton from '../../components/order/SlideRightButton';
import { useOrder } from '../../contexts/OrderContext';

export default function OrderPage() {
  const [orders] = useOrder();
  const [courierTip, setCourierTip] = useState(0);

  // use available credits
  const [isCredits, setIsCredits] = useState(false);

  const [isTipModalOpen, setIsTipModalOpen] = useState(false);

  const credits = 40;

  const delivery = 0;

  const subtotal = orders?.reduce(
    (sum, order) => sum + order.quantity * order.price,
    0
  );

  const total = subtotal + courierTip + delivery - (isCredits ? credits : 0);

  const toggleIsCredits = () => {
    setIsCredits((prev) => !prev);
  };

  const handleOrder = () => {
    // temporary user success
    console.log(courierTip, total, orders);
    window.alert('order sent!');
  };

  if (!orders || orders.length === 0) {
    return (
      <div className='grid min-h-[40vh] place-items-center'>
        <p>no orders yet</p>
      </div>
    );
  }

  return (
    <>
      <PageHeading title={'your order'} />
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
        <span>${total}</span>
      </p>

      <SlideRightButton handleSubmit={handleOrder} />

      <CourierTipModal
        isOpen={isTipModalOpen}
        setCourierTip={setCourierTip}
        setIsOpen={setIsTipModalOpen}
      />
    </>
  );
}
