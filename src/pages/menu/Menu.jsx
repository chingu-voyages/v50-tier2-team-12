import { Suspense } from 'react';
import { Await, useParams, useRouteLoaderData } from 'react-router-dom';

import PageHeading from '../../components/headings/PageHeading';
import Restaurants from '../../components/menu/Restaurants';
import RestaurantSkeleton from '../../components/skeletons/RestaurantSkeleton';

export default function Menu() {
  const { data } = useRouteLoaderData('menu');
  const { name } = useParams();

  return (
    <div className='max-w-md mx-auto'>
      <PageHeading title={`${name}`} />

      <Suspense fallback={<RestaurantSkeleton />}>
        <Await resolve={data}>
          <Restaurants name={name} />
        </Await>
      </Suspense>
    </div>
  );
}
