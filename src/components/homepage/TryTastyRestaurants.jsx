import Restaurant from './Restaurant';

const TryTastyRestaurants = ({ restaurants }) => {
  return (
    <section className='hidden md:block'>
      <h3 className='text-2xl row-start-2 md:col-start-1 md:col-end-3 text-nowrap text-black font-work-sans font-semibold  leading-normal tracking-[-0.48]'>
        Try something from our tasty restaurants!
      </h3>
      <div className="md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center md:place-content-between w-full overflow-hidden">
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
};

export default TryTastyRestaurants;
