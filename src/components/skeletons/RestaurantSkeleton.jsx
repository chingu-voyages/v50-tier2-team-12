export default function RestaurantSkeleton() {
  const items = Array.from({ length: 10 }, (_, index) => index);
  return (
    <div className='space-y-8'>
      <span className='loading h-10 rounded-lg md:h-32'></span>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:px-17'>
        {items.map((item) => (
          <span key={item} className='loading h-36 rounded-2xl'></span>
        ))}
      </div>
    </div>
  );
}
