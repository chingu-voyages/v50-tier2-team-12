import { Link, useNavigate } from 'react-router-dom';
import tree from '../../assets/tree.webp';
import { cn } from '../../utils/utils';
import PageHeading from '../headings/PageHeading';
import { Icons } from '../Icons';
import ModalWrapper from '../modals/ModalWrapper';

export default function EmptyOrder() {
  const navigate = useNavigate();

  const handleCloseButtonClick = () => {
    navigate('/');
  };
  return (
    <>
      <Content className='min-h-[calc(100lvh-12rem)] md:hidden' />

      <ModalWrapper
        isDialogOpen={true}
        className='hidden md:block lg:max-w-[25rem] outline-none'
        showCancel={false}
        showConfirm={false}
      >
        <button
          className='absolute right-8 top-8 group'
          onClick={handleCloseButtonClick}
          aria-label='close'
        >
          <Icons.close className='group-hover:active-link' />
        </button>
        <PageHeading title={'your order'} />
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
        It looks like you haven&#39;t ordered anything yet!
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
