import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/utils';
import { Icons } from '../Icons';

export default function PageHeading({
  title,
  className = '',
  children = null,
}) {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section
      className={cn(
        'w-full mt-7 mb-6 relative text-center md:pl-17',
        className
      )}
    >
      <button
        aria-label='go back'
        onClick={goBack}
        className='absolute left-0 top-1/2 -translate-y-1/2 md:hidden'
      >
        <Icons.back />
      </button>
      <h2
        className={
          'capitalize font-semibold text-2xl md:text-[2rem] text-black text-nowrap truncate mx-10 sm:mx-0'
        }
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
