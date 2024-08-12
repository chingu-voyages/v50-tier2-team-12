import { cn } from '../../utils/utils';

export default function CreditsInput({
  value,
  onChange,
  label = 'Credits amount',
  styles = '',
}) {
  return (
    <label className={cn('block relative', styles)}>
      <span className='text-primary-violet text-xs md:text-sm font-medium block mb-2 md:font-semibold md:text-black'>
        {label}
      </span>
      <div className='relative md:mt-4 flex justify-center items-center'>
        <input
          type='number'
          id='credit-amount'
          name='credit-amount'
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className='w-full border rounded-lg border-primary-violet h-10 outline-none focus-visible:outline-primary-violet/50 px-3 md:h-[67px] md:text-2xl md:pl-9 md:rounded-2xl md:border-grey md:focus-visible:border-primary-violet'
        />
        {value ? (
          <span className='hidden md:block absolute top-1/2 -translate-y-1/2  left-3 text-2xl'>
            $
          </span>
        ) : null}
      </div>
    </label>
  );
}
