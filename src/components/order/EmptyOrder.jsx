import { Link, useNavigate } from 'react-router-dom';
import tree from '../../assets/tree.webp';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { cn } from '../../utils/utils';
import PageHeading from '../headings/PageHeading';
import { Icons } from '../Icons';
import ModalWrapper from '../modals/ModalWrapper';

export default function EmptyOrder() {
  const navigate = useNavigate();

  const handleCloseButtonClick = () => {
    navigate('/');
  };

  const isNotMobileDevice = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Content className='min-h-[calc(100lvh-12rem)] md:hidden' />

      <ModalWrapper
        isDialogOpen={isNotMobileDevice}
        className=' overflow-y-scroll md:w-1/2 lg:w-2/5 xl:max-w-[32rem] outline-none no-scrollbar min-h-[35rem]'
        showCancel={false}
        showConfirm={false}
      >
        <button
          className='absolute right-8 top-8 group outline-none'
          onClick={handleCloseButtonClick}
          aria-label='close'
        >
          <Icons.close className='group-hover:active-link group-focus-visible:outline-primary-violet' />
        </button>
        <PageHeading title={'your order'} className='md:p-0' />
        <Content />
      </ModalWrapper>
    </>
  );
}

function Content({ className = '' }) {
  return (
    <div
      className={cn(
        'flex flex-col justify-between items-center gap-6',
        className
      )}
    >
      <h3 className='bg-light-violet rounded-2xl p-6 font-medium w-full text-xl'>
        <span className='block md:max-w-[20.875rem]'>
          It looks like you haven&#39;t ordered anything yet!
        </span>
      </h3>

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
