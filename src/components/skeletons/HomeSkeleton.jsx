import RestaurantCard from './RestaurantCard';

export default function HomeSkeleton() {
  const items = Array.from({ length: 10 }, (_, index) => index);
  return (
    <div className='grid gap-3 '>
      {items.map((item) => (
        <RestaurantCard key={item} />
      ))}
    </div>
  );
}
