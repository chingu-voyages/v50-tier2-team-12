import { useRouteLoaderData } from 'react-router-dom';
import PageHeading from '../../components/headings/PageHeading';

import Map from '../../components/map/Map';
import { removeDuplicates } from '../../utils/utils';

export default function MapPage() {
  const data = useRouteLoaderData('menu');

  delete data.pagination;

  const dataList = Object.values(data).flat(2);

  const restaurants = removeDuplicates(dataList, 'name');

  return (
    <>
      <PageHeading
        title={'restaurants near you'}
        className='flex justify-start items-center gap-12 mb-9 md:gap-28'
      />

      <Map restaurants={restaurants} />
    </>
  );
}
