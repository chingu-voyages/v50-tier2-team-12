import { Suspense } from 'react';
import { Await, useRouteLoaderData } from 'react-router-dom';
import DataError from '../../components/error/DataError';
import PageHeading from '../../components/headings/PageHeading';
import ItemDetails from '../../components/menu/ItemDetails';
import MenuSkeleton from '../../components/skeletons/MenuSkeleton';

export default function MenuItemDetails() {
  const { data } = useRouteLoaderData('menu');

  return (
    <div className='h-[calc(100vh-75px)] flex flex-col'>
      <PageHeading title={'product details'} />

      <Suspense fallback={<MenuSkeleton />}>
        <Await resolve={data} errorElement={<DataError />}>
          <ItemDetails />
        </Await>
      </Suspense>
    </div>
  );
}
