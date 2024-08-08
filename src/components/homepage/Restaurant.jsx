import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
const Restaurant = ({ restaurant }) => {
  const handleError = (e) => {
    e.target.src = '/meal-dummy-image.webp';
  };

  return (
    <section className="leading-5 py-6 shadow-card-shadow" >
      <Link to={`/restaurants/${restaurant.name}`}>
        <LazyLoad
          height={200}
          offset={100}
          placeholder={
            <div className='h-28 w-96 sm:w-80 bg-light-grey animate-pulse rounded-t-2xl  mb-3'></div>
          }
        >
          <img
            src={restaurant.img}
            loading='lazy'
            onError={handleError}
            className='h-28 sm:w-80 w-[382px]   object-cover rounded-t-2xl  mb-3 bg-custom-gradient'
            alt={restaurant.name}
          />
        </LazyLoad>
        <h2 className="text-xl font-medium px-2 leading-normal">{restaurant.name}</h2>
        <p className='text-base font-normal px-2  leading-normal text-grey'>{restaurant.country}</p>

      </Link>
    </section>
  );
};

export default Restaurant;
