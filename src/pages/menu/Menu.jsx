import { Suspense } from 'react';
import { Await, useParams, useRouteLoaderData } from 'react-router-dom';

import PageHeading from '../../components/headings/PageHeading';
import RestaurantMenus from '../../components/menu/RestaurantMenus';
import RestaurantSkeleton from '../../components/skeletons/RestaurantSkeleton';

export default function Menu() {
  const { data } = useRouteLoaderData('menu');
  const { name } = useParams();
  return (
    <div className='md:w-full'>
      <PageHeading title={`${name}`} className='md:hidden'/>

      <Suspense fallback={<RestaurantSkeleton />}>
        <Await resolve={data}>
          <RestaurantMenus name={name} />
        </Await>
      </Suspense>
    </div>
  );
}
