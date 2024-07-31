export default function RestaurantSkeleton() {
  const items = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div className='space-y-8'>
      <span className='loading h-10 rounded-lg'></span>

      <div className='grid gap-4 '>
        {items.map((item) => (
          <span key={item} className='loading h-36 rounded-2xl'></span>
        ))}
      </div>
    </div>
  );
}
