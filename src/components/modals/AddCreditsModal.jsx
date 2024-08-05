import { useState } from 'react';
import ModalWrapper from './ModalWrapper';

export default function AddCreditsModal({ setCredits, setIsOpen, isOpen }) {
  const [creditAmount, setCreditAmount] = useState('');

  const onClose = () => {
    setCreditAmount('');
    setIsOpen(false);
  };

  const onConfirm = () => {
    if (creditAmount === '') return;
    setCredits(
      (currentCredits) => parseFloat(currentCredits) + parseFloat(creditAmount)
    );
    setCreditAmount('');
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
      <h3 className='font-semibold'>Enter Credits</h3>

      <p className='text-grey my-5 text-xs md:text-sm'>
        Enter how many credits you want
      </p>

      <label className='block'>
        <span className='text-primary-violet text-xs md:text-sm font-medium block mb-2'>
          Credits amount
        </span>
        <input
          type='number'
          id='credit-amount'
          name='credit-amount'
          value={creditAmount}
          onChange={(event) => setCreditAmount(event.target.value)}
          className='w-full border rounded-lg border-primary-violet h-10 outline-none focus-visible:outline-primary-violet/50 px-3'
        />
      </label>
    </ModalWrapper>
  );
}
