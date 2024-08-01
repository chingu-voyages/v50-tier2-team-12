import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/utils';
import { Icons } from '../Icons';

export default function PageHeading({ title, className = '' }) {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className={cn('grid grid-cols-3 mt-7 mb-6 relative', className)}>
      <button aria-label='go back' onClick={goBack} className=''>
        <Icons.back />
      </button>
      <h2 className='capitalize font-work-sans font-semibold text-2xl text-black text-nowrap truncate col-span-2'>
        {title}
      </h2>
    </section>
  );
}
