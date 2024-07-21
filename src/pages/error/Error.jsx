import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 h-svh '>
      <h2 className='text-4xl'>404 not found</h2>
      <Link to={'/'} className='block bg-slate-300 px-7 py-2 rounded '>
        Go back
      </Link>
    </div>
  );
}
