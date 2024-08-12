import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import { Await, useRouteLoaderData } from 'react-router-dom';
import DataError from '../../components/error/DataError';
import Restaurants from '../../components/homepage/Restaurants';
import HomeSkeleton from '../../components/skeletons/HomeSkeleton';

export default function HomePage() {
  const { data } = useRouteLoaderData('menu');

  return (
    <section className='space-y-6  md:px-17'>
      <Link
        to={'/'}
        aria-label='page logo'
        className=' md:hover:active-link md:hidden'
      >
        <img src={logo} alt='logo' width={156} height={26} />
      </Link>
      <Suspense fallback={<HomeSkeleton />}>
        <Await resolve={data} errorElement={<DataError />}>
          {(restaurants) => <Restaurants menu={restaurants} />}
        </Await>
      </Suspense>
    </section>
  );
}
