import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const Restaurant = ({ restaurant }) => {
  const handleError = (e) => {
    e.target.src = '/meal-dummy-image.webp';
  };

  return (
    <section className='leading-5 py-6'>
      <LazyLoad
        height={200}
        offset={100}
        placeholder={
          <div className='h-28 w-96 sm:w-80 bg-gray-200 animate-pulse rounded-t-2xl mb-3'></div>
        }
      >
        <img
          src={restaurant.img}
          loading='lazy'
          onError={handleError}
          className='h-28 w-96 sm:w-80 object-cover rounded-t-2xl bg-gradient-to-r from-gray-200 to-gray-500 mb-3'
          alt={restaurant.name}
        />
      </LazyLoad>
      <h2 className='text-lg font-semibold'>
        <Link to={`/restaurants/${restaurant.name}`}>{restaurant.name}</Link>
      </h2>
      <p>{restaurant.country}</p>
    </section>
  );
};

export default Restaurant;
