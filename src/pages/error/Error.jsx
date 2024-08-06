import smile from '../../assets/sweat-smile-emoji.webp';

export default function Error() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 min-h-svh'>
      <h1 className='text-6xl font-semibold mb-5'>Oops!</h1>

      <p className='text-xl font-medium text-center'>
        This page might be on a coffee break. How about we help you find
        something else instead?
      </p>

      <img src={smile} alt='' width={200} height={200} className='w-40' />

      <p className='text-8xl font-semibold'>404</p>
    </div>
  );
}
