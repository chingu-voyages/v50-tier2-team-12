export default function Credits({
  credits,
  isCredits,
  toggleIsCredits,
  setIsAddCreditsModalOpen,
}) {
  const handleOpenAddCreditsModal = () => {
    setIsAddCreditsModalOpen(true);
  };

  return (
    <section className='flex flex-col mt-8 h-[580px]'>
      <h3 className='font-medium text-xl'>Available Credits</h3>
      <div className='mt-1 bg-light-violet py-5 px-3 mb-2 rounded-2xl text-xl font-medium text-primary-violet'>
        ${credits.toFixed(2)}
      </div>
      <div className='flex justify-between items-center mt-1 bg-light-violet py-5 px-3 rounded-2xl min-h-[68px]'>
        <p className=''>Always use available credits</p>

        <label className='inline-flex items-center cursor-pointer'>
          <input
            type='checkbox'
            checked={isCredits}
            onChange={toggleIsCredits}
            className='sr-only peer'
          />
          <span className="block relative w-11 h-6 bg-disabled peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-violet/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-violet"></span>
        </label>
      </div>
      <div className='flex-grow'></div>
      <div>
        <button
          onClick={handleOpenAddCreditsModal}
          className='bg-primary-violet text-xl font-semibold text-white py-3 w-full my-3 text-center flex items-center text-nowrap hover:opacity-50 justify-center rounded-lg'
        >
          Add more credits
        </button>
      </div>
    </section>
  );
}
