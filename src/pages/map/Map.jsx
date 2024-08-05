import { Await, useRouteLoaderData } from 'react-router-dom';
import DataError from '../../components/error/DataError';
import PageHeading from '../../components/headings/PageHeading';

import { Suspense } from 'react';
import Map from '../../components/map/MapDisplay';
import MapSkeleton from '../../components/skeletons/MapSkeleton';
import { removeDuplicates } from '../../utils/utils';

export default function MapPage() {
  const { data } = useRouteLoaderData('menu');

  return (
    <>
      <PageHeading
        title={'restaurants near you'}
        className='flex justify-start items-center gap-12 mb-9 md:gap-28'
      />

      <Suspense fallback={<MapSkeleton />}>
        <Await resolve={data} errorElement={<DataError />}>
          {(response) => {
            delete response.pagination;

            const dataList = Object.values(response).flat(2);

            const restaurants = removeDuplicates(dataList, 'name');
            return <Map restaurants={restaurants} />;
          }}
        </Await>
      </Suspense>
    </>
  );
}
