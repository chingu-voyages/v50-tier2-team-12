import { Link } from 'react-router-dom';
import tree from '../../assets/tree.webp';

export default function EmptyOrder() {
  return (
    <div className='min-h-view flex flex-col items-center'>
      <p className='bg-light-violet rounded-2xl p-7'>
        it looks like you haven&#39;t ordered anything yet!
      </p>

      <img
        src={tree}
        alt=''
        className='max-w-[14rem] rotate-[29.9deg] block my-12'
        width={230}
        height={230}
      />

      <Link
        to={'/'}
        className='bg-primary-violet text-white w-full capitalize font-semibold text-xl rounded-lg h-14 flex items-center justify-center mt-auto'
      >
        browse restaurants
      </Link>
    </div>
  );
}
