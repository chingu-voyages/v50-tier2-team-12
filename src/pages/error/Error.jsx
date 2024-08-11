import smile from '../../assets/sweat-smile-emoji.webp';

export default function Error() {
  return (
    <div className='flex flex-col items-center justify-center gap-7 min-h-svh max-w-[44.1875rem] mx-auto md:gap-12 md:px-17'>
      <h1 className='text-6xl font-semibold mb-5 md:text-7xl lg:text-[5.25rem] '>
        Oops!
      </h1>

      <p className='text-xl font-medium text-center text-pretty md:text-2xl lg:text-[1.75rem]'>
        This page might be on a coffee break. How about we help you find
        something else instead?
      </p>

      <img
        src={smile}
        alt=''
        width={200}
        height={200}
        className='w-40 md:w-64 lg:w-[16.875rem]'
      />

      <p className='text-8xl font-semibold md:text-[11rem]'>404</p>
    </div>
  );
}
