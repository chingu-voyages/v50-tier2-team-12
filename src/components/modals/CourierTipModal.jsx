import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
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

  const isNotMobileDevice = useMediaQuery('(min-width: 768px)');

  // desktop and medium devices version

  if (isNotMobileDevice && isOpen)
    return (
      <form
        className='mt-8  animate-accordion-down'
        onSubmit={(e) => {
          e.preventDefault();
          onConfirm();
        }}
      >
        <TipUpdate tipAmount={tipAmount} setTipAmount={setTipAmount} />
        <div className='flex gap-3 w-full pb-5 items-center  mt-5'>
          <button
            type='button'
            onClick={onClose}
            className='border-1 border-primary-violet capitalize font-semibold text-xs text-primary-violet rounded-5p w-[92px] h-9 py-2 px-5 block hover:border-hover-violet hover:text-hover-violet active:border-dark-violet active:text-dark-violet'
          >
            cancel
          </button>
          <button
            type='submit'
            onClick={onConfirm}
            className='capitalize bg-primary-violet text-white text-xs font-semibold rounded-5p w-[92px] h-9 py-2 px-5 block hover:bg-hover-violet active:bg-dark-violet'
          >
            done
          </button>
        </div>
      </form>
    );

  // mobile device modal

  return (
    <ModalWrapper
      onClose={onClose}
      onConfirm={onConfirm}
      confirmText='done'
      isDialogOpen={isOpen}
      className='max-w-64'
    >
      <TipUpdate tipAmount={tipAmount} setTipAmount={setTipAmount} />
    </ModalWrapper>
  );
}

// reusable code

function TipUpdate({ setTipAmount, tipAmount }) {
  return (
    <>
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
          className='w-full border rounded-lg border-primary-violet h-10 outline-none focus-visible:outline-primary-violet/50 px-3 md:max-w-[387px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
          autoFocus
        />
      </label>
    </>
  );
}
