import { useState } from 'react';
import PageHeading from '../../components/headings/PageHeading';
import CourierTipModal from '../../components/modals/CourierTipModal';
import CourierTips from '../../components/order/CourierTip';
import Credits from '../../components/order/Credits';
import OrderList from '../../components/order/Order';
import SlideRightButton from '../../components/order/SlideRightButton';
import { useOrder } from '../../contexts/OrderContext';

export default function OrderPage() {
  const [orders] = useOrder();
  const [courierTip, setCourierTip] = useState(0);

  const [isTipModalOpen, setIsTipModalOpen] = useState(false);

  const total = orders.reduce(
    (sum, order) => sum + order.quantity * order.price,
    0
  );

  const handleOrder = () => {
    console.log(courierTip, total, orders);
  };

  return (
    <>
      <PageHeading title={'your order'} />
      <OrderList orders={orders} />
      <CourierTips
        setCourierTip={setCourierTip}
        setIsTipModalOpen={setIsTipModalOpen}
        courierTip={courierTip}
      />
      <Credits />
      <h3 className='font-medium text-2xl flex items-center justify-between my-7'>
        <span className='capitalize'>total</span>
        <span>${total}</span>
      </h3>

      <SlideRightButton handleSubmit={handleOrder} />

      <CourierTipModal
        isOpen={isTipModalOpen}
        setCourierTip={setCourierTip}
        setIsOpen={setIsTipModalOpen}
      />
    </>
  );
}
