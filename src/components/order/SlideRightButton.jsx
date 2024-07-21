import { useSwipeable } from 'react-swipeable';
import { Icons } from '../Icons';

export default function SlideRightButton({ handleSubmit }) {
  const handlers = useSwipeable({
    onSwipedRight: () => {
      handleSubmit();
    },
  });

  return (
    <button
      {...handlers}
      onClick={handleSubmit}
      className='bg-primary-violet text-xl font-semibold text-white py-3 w-full my-3 text-center flex items-center text-nowrap hover:opacity-50 justify-center rounded-lg relative'
    >
      <Icons.chevronsRight
        className={'animate-pulse absolute top-1/2 -translate-y-1/2 left-2'}
      />
      <span className=''>Swipe to Order</span>
    </button>
  );
}
