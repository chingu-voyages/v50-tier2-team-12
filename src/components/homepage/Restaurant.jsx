


const Restaurant = ({ restaurant }) => {
  const handleError = (e) => {
    e.target.src = "/meal-dummy-image.webp"; 
  };

  return (
    <section className=' leading-5  py-6'>
        <img src={restaurant.img}
        onError={handleError} className='h-28 w-96 sm:w-80 object-cover rounded-t-2xl bg-gradient-to-r from-gray-200 to-gray-500 mb-3' alt={restaurant.name} />
      <h2 className="text-lg font-semibold">{restaurant.name}</h2>
      <p>{restaurant.country}</p>
    </section>
  )
}

export default Restaurant
