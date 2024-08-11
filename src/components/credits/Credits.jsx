import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { Icons } from '../Icons';
import AddCreditsModal from '../modals/AddCreditsModal';
import CreditsInput from './CreditsInput';

export default function Credits() {
  const [creditAmount, setCreditAmount] = useState('');

  const { credits, setCredits, isCredits, setIsCredits } = useOutletContext();

  const [isAddCreditsModalOpen, setIsAddCreditsModalOpen] = useState(false);

  const navigate = useNavigate();

  const toggleIsCredits = () => {
    setIsCredits((prev) => !prev);
  };

  const isNotMobileDevice = useMediaQuery('(min-width: 768px)');

  // go back to previous page on tablet and desktop
  const handleCloseButtonClick = () => {
    navigate(-1);
  };

  // update credit amount
  const addCredits = () => {
    setCredits(
      (currentCredits) => parseFloat(currentCredits) + parseFloat(creditAmount)
    );
    setCreditAmount('');
  };

  const handleAddCreditsButtonClick = () => {
    // add credits on tablet and desktop without showing modal
    if (isNotMobileDevice && creditAmount) {
      addCredits();
      return;
    }

    // show modal on mobile devices
    setIsAddCreditsModalOpen(true);
  };

  return (
    <section className='flex flex-col mt-8 min-h-[calc(100lvh-12rem)] md:min-h-[40.9375rem]'>
      <button
        className='absolute right-8 top-8 group outline-none'
        onClick={handleCloseButtonClick}
        aria-label='close'
      >
        <Icons.close className='group-hover:active-link group-focus-visible:outline-primary-violet' />
      </button>
      <h3 className='font-semibold text-xl'>Available Credits</h3>
      <div className='my-4 bg-light-violet py-5 px-3 rounded-2xl text-xl font-medium text-primary-violet'>
        ${credits.toFixed(2)}
      </div>
      <div className='flex justify-between items-center bg-light-violet py-5 px-3 rounded-2xl min-h-[68px]'>
        <p className=''>Always use available credits</p>

        <label className='inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            checked={isCredits}
            onChange={toggleIsCredits}
            className='sr-only peer'
          />
          <span className="block relative w-11 h-6 bg-disabled peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-violet/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-violet"></span>
        </label>
      </div>
      {isNotMobileDevice ? (
        <CreditsInput
          value={creditAmount}
          onChange={setCreditAmount}
          label='Add Credits'
          styles='mt-14'
        />
      ) : (
        <AddCreditsModal
          isOpen={isAddCreditsModalOpen}
          addCredits={addCredits}
          setIsOpen={setIsAddCreditsModalOpen}
          isNotMobileDevice={isNotMobileDevice}
          creditAmount={creditAmount}
          setCreditAmount={setCreditAmount}
        />
      )}

      <button
        onClick={handleAddCreditsButtonClick}
        className='bg-primary-violet text-xl font-semibold text-white py-3 w-full my-3 text-center flex items-center text-nowrap hover:opacity-50 justify-center rounded-lg mt-auto md:disabled:bg-[#6A6A6A]'
        disabled={isNotMobileDevice && !creditAmount}
      >
        {isNotMobileDevice ? 'Add Credits' : 'Add more credits'}
      </button>
    </section>
  );
}
