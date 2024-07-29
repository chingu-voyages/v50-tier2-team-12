import { useState } from "react";
import Restaurant from "./Restaurant";
import { useRouteLoaderData } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const Restaurants = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const menu = useRouteLoaderData('menu');

  // eslint-disable-next-line
  const { pagination, ...restMenus } = menu || {};
  const allCategories = Object.keys(restMenus) || [];
  const allMenus = Object.values(restMenus).flat();

  // Get unique restaurants by their name
  const getUniqueRestaurants = (restaurants) => {
    const uniqueRestaurants = [];
    const names = new Set();
    restaurants.forEach((restaurant) => {
      if (!names.has(restaurant.name)) {
        names.add(restaurant.name);
        uniqueRestaurants.push(restaurant);
      }
    });
    return uniqueRestaurants;
  };

  const displayedMenu = activeCategory
    ? restMenus[activeCategory]
    : getUniqueRestaurants(allMenus);

  const handleCategoryClick = (value) => {
    setActiveCategory(value);
    setCurrentPage(1); // Reset page when category changes
  };

  const fetchMoreData = () => {
    setCurrentPage(currentPage + 1);
  };

  const visibleRestaurants = displayedMenu.slice(0, currentPage * itemsPerPage);

  return (
    <>
      <div className='flex gap-2 max-w-ful overflow-scroll no-scrollbar'>
        <button
          className={`w-max ${!activeCategory
            ? 'text-primary-violet underline decoration-primary-violet underline-offset-4 font-semibold'
            : 'border-disabled  '}`
          }
          onClick={() => handleCategoryClick("")}
        >
          All
        </button>
        {allCategories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              className={`w-max text-nowrap transition-all  ${isActive
                ? 'text-primary-violet decoration-primary-violet animate-pulse underline underline-offset-4 font-semibold transition-all'
                : 'border-grey '
                }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1, category.length)}
            </button>
          );
        })}
      </div>
      <InfiniteScroll
        dataLength={visibleRestaurants.length}
        next={fetchMoreData}
        hasMore={visibleRestaurants.length < displayedMenu.length}
        loader={<h3>Loading... </h3>}
        endMessage={<p className="text-center"><b>No more restaurants</b></p>}
      >
        <section className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center m-auto w-full">
          {visibleRestaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />
          ))}
        </section>
      </InfiniteScroll>
    </>
  );
};

export default Restaurants;
