export default function Credits({ credits, isCredits, toggleIsCredits }) {
  return (
    <section className='my-8'>
      <h3 className='font-medium text-xl'>Credits</h3>

      <div className='flex justify-between items-center mt-1 bg-light-violet py-5 px-3 rounded-2xl'>
        <p className=''>Use available credits</p>

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

      {isCredits ? (
        <p className='px-3 mt-2'>Total credits ${credits.toFixed(2)}</p>
      ) : null}
    </section>
  );
}
