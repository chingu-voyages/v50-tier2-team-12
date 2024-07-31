import { Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import DataError from '../../components/error/DataError';
import Restaurants from '../../components/homepage/Restaurants';
import HomeSkeleton from '../../components/skeletons/HomeSkeleton';

export default function HomePage() {
  const { data } = useRouteLoaderData('menu');

  return (
    <section className='space-y-6 p-8'>
      <h2 className='font-bold text-3xl'>Restaurants</h2>
      <Suspense fallback={<HomeSkeleton />}>
        <Await resolve={data} errorElement={<DataError />}>
          <Restaurants />
        </Await>
      </Suspense>
    </section>
  );
}
