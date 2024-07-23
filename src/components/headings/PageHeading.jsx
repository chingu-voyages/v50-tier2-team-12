import { useNavigate } from 'react-router-dom';
import { Icons } from '../Icons';

export default function PageHeading({ title }) {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section className='grid grid-cols-3 mt-7 mb-6 relative'>
      <button aria-label='go back' onClick={goBack} className=''>
        <Icons.back />
      </button>
      <h2 className='capitalize font-work-sans font-semibold text-2xl text-black text-nowrap'>
        {title}
      </h2>
    </section>
  );
}
