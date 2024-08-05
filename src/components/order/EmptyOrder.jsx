import { Link } from 'react-router-dom';
import tree from '../../assets/tree.webp';

export default function EmptyOrder() {
  return (
    <div className='min-h-[calc(100lvh-12rem)] flex flex-col justify-between items-center'>
      <p className='bg-light-violet rounded-2xl p-7'>
        it looks like you haven&#39;t ordered anything yet!
      </p>

      <img src={tree} alt='' width={221.33} height={221.33} className='block' />

      <Link
        to={'/'}
        className='bg-primary-violet text-white w-full capitalize font-semibold text-xl rounded-lg h-cta flex items-center justify-center active:bg-dark-violet hover:bg-hover-violet'
      >
        browse restaurants
      </Link>
    </div>
  );
}
