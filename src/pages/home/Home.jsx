import { useRouteLoaderData } from 'react-router-dom';

export default function HomePage() {
  const menus = useRouteLoaderData('menu');
  console.log(menus);
  return (
    <>
      <h2>homepage content here</h2>
    </>
  );
}
