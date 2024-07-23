import { useState } from "react";
import Restaurant from "./Restaurant";
import { useRouteLoaderData } from 'react-router-dom';


const Restaurants = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const menu = useRouteLoaderData('menu');
// eslint-disable-next-line
  const { pagination, ...restMenus } = menu || {};
  const allCategories = Object.keys(restMenus) || [];
  const allMenus = Object.values(restMenus).flat();

  // get unique restaurants by their name
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
  };

  return (
    <>
      <div className='flex gap-2 max-w-ful overflow-scroll no-scrollbar'>
        <button
          className={`w-max ${!activeCategory
            ? 'text-primary-violet underline decoration-primary-violet underline-offset-4 font-semibold'
              : 'border-disabled text-disabled '}`
          }
          onClick={() => handleCategoryClick("")}
        >
          All
        </button>
        {allCategories.map((category, index) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={index}
              className={`w-max text-nowrap transition-all t ${isActive
                ? 'text-primary-violet decoration-primary-violet underline underline-offset-4 font-semibold transition-all'
                  : 'border-disabled text-disabled '
                }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1, category.length)}
            </button>
          );
        })}
      </div>
      <section className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center m-auto w-full">

        {displayedMenu.slice(0, 20).map((restaurant, index) => (
          <Restaurant key={index} restaurant={restaurant} />
        ))}
      </section>
    </>
  );
};

export default Restaurants;
