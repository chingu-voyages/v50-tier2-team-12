export default function HomeSkeleton() {
  const items = Array.from({ length: 5 }, (_, index) => index);
  return (
    <div className='space-y-4'>
      <span className='loading h-10 rounded-lg'></span>
      <span className='loading h-7 rounded-lg'></span>

      <div className='grid gap-4 '>
        {items.map((item) => (
          <span key={item} className='loading h-48 rounded-2xl'></span>
        ))}
      </div>
    </div>
  );
}
