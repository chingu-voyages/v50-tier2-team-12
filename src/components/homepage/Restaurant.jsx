import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
const Restaurant = ({ restaurant }) => {
  const handleError = (e) => {
    e.target.src = '/meal-dummy-image.webp';
  };

  return (
    <section className='leading-5 py-6'>
    <section className="leading-5 py-6 " >
      <Link to={`/restaurants/${restaurant.name}`}>
        <LazyLoad
          height={200}
          offset={100}
          placeholder={
            <div className='h-28 w-96 sm:w-80 bg-light-grey animate-pulse rounded-t-2xl mb-3'></div>
          }
        >
          <img
            src={restaurant.img}
            loading='lazy'
            onError={handleError}
            className='h-28 w-96 sm:w-80 object-cover rounded-t-2xl bg-light-grey mb-3'
            alt={restaurant.name}
          />
        </LazyLoad>
        <h2 className='text-lg font-semibold'>{restaurant.name}</h2>
        <p>{restaurant.country}</p>
     
          <h2 className="text-lg font-semibold px-2">{restaurant.name}</h2>
          <p className='px-2'>{restaurant.country}</p>
       
      </Link>
    </section>
  );
};

export default Restaurant;
