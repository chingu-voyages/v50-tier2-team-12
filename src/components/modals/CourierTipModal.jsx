import { useState } from 'react';
import ModalWrapper from './ModalWrapper';

export default function CourierTipModal({ setCourierTip, setIsOpen, isOpen }) {
  const [tipAmount, setTipAmount] = useState('');

  const onClose = () => {
    setIsOpen(false);
  };

  const onConfirm = () => {
    setCourierTip(+tipAmount);
    onClose();
  };

  return (
    <ModalWrapper
      onClose={onClose}
      onConfirm={onConfirm}
      confirmText='done'
      isDialogOpen={isOpen}
      className='max-w-64'
    >
      <h3 className='font-semibold'>Tip the courier</h3>

      <p className='text-grey my-5 text-xs md:text-sm'>
        Tip between $0.50 - $100.00
      </p>

      <label className='block'>
        <span className='text-primary-violet text-xs md:text-sm font-medium block mb-2'>
          Tip amount
        </span>
        <input
          type='number'
          id='tip-amount'
          name='tip-amount'
          value={tipAmount}
          onChange={(event) => setTipAmount(event.target.value)}
          className='w-full border rounded-lg border-primary-violet h-10 outline-none focus-visible:outline-primary-violet/50 px-3'
        />
      </label>
    </ModalWrapper>
  );
}
