const MenuDesktopHeading = ({ name, backgroundImage, country }) => {
  return (
    <section className='hidden md:block relative md:h-40 w-full'>
      <div
        className='absolute inset-0 bg-cover bg-center rounded-t-xl'
        style={{
          backgroundImage,
          opacity: 0.2,
        }}
      ></div>
      <div className='absolute inset-0 px-17 py-10 flex flex-col justify-end'>
        <h2
          className={
            'capitalize font-semibold text-3xl text-black text-nowrap truncate mx-10 sm:mx-0 cursor-pointer'
          }
        >
          {name}
        </h2>
        <p className='text-grey text-base font-normal pb-1 cursor-pointer'>
          {country}
        </p>
      </div>
    </section>
  );
};

export default MenuDesktopHeading;
