import { cn } from '../../utils/utils';
import { Icons } from '../Icons';

export default function CourierTips({
  setCourierTip,
  setIsTipModalOpen,
  courierTip,
}) {
  const selectTip = (value) => {
    setCourierTip(value);
  };

  const handleOpenTipModal = () => {
    setIsTipModalOpen(true);
  };

  return (
    <section>
      <h3 className='font-semibold text-xl md:text-2xl mb-2'>
        Add courier tip
      </h3>
      <div className='md:border-2 md:border-light-grey md:rounded-2xl md:px-6 md:py-8'>
        <div className='md:flex md:items-center md:gap-4'>
          <p className='text-grey w-full'>
            The tip would go directly to the courier salary
          </p>

          <p className='bg-light-violet p-1 rounded-[4px] hidden md:block'>
            ${courierTip.toFixed(2)}
          </p>
        </div>
        <div className='flex gap-2 items-center mt-4'>
          {availableTips.map((tip) => {
            const isActive = courierTip === tip;
            return (
              <TipButton
                key={tip}
                value={tip}
                handleClick={selectTip}
                isActive={isActive}
              />
            );
          })}
          <button
            type='button'
            className='border-1 border-disabled active:border-primary-violet active:text-primary-violet hover:opacity-50 rounded-3xl px-4 py-2 w-17 h-10 flex justify-center items-center'
            aria-label='enter tip amount manually'
            onClick={handleOpenTipModal}
          >
            <Icons.tip />
          </button>
        </div>
      </div>
    </section>
  );
}

function TipButton({ value, handleClick, isActive }) {
  return (
    <button
      type='button'
      onClick={() => handleClick(value)}
      className={cn(
        'border-1 rounded-3xl px-4 py-2 w-17 h-10 hover:opacity-50',
        isActive
          ? 'border-primary-violet text-primary-violet hover:opacity-100'
          : 'border-disabled text-disabled'
      )}
    >
      ${value}
    </button>
  );
}

const availableTips = [0, 1, 3, 5];
