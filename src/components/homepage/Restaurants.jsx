import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Restaurant from './Restaurant';
import Search from "../Search/Search";
import NoSearchResults from "../Search/NoSearchResults";
import { moveBestFoodsToSecond } from "../../utils/utils"


const Restaurants = ({ menu }) => {
  const [activeCategory, setActiveCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const itemsPerPage = 10;


  // eslint-disable-next-line
  const { pagination, 'our-foods': ourFoods, ...restMenus } = menu || {};
  console.log(ourFoods);


  const allCategories = Object.keys(restMenus) || [];
  moveBestFoodsToSecond(allCategories);
  const allMenus = Object.values(restMenus).flat();

  // filter search 
  const updateFilter = (value) => {
    setFilter(value);
  }

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

  const filteredRestaurants = displayedMenu.filter(restaurant =>
    restaurant.name.toLowerCase().includes(filter.toLowerCase())
  );
  const visibleRestaurants = filteredRestaurants.slice(0, currentPage * itemsPerPage);

  return (
    <>
      <section className='md:flex   gap-48'>
        <Search value={filter} onChange={updateFilter} />
        {!filter && (
          <div className='flex items-center  gap-2 lg:gap-4 max-w-full  m-auto  overflow-scroll no-scrollbar'>

            <button
              className={`w-max font-work-sans font-medium text-base text-grey ${!activeCategory
                ? 'text-primary-violet decoration-primary-violet decoration-2 underline underline-offset-4 font-semibold '
                : ' '}`
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
                  className={`w-max text-nowrap  font-work-sans font-medium text-base text-grey  ${isActive
                    ? 'text-primary-violet decoration-primary-violet decoration-2 underline underline-offset-4 font-semibold '
                    : ''
                    }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              );
            })}
          </div>
        )}
      </section>
      <h3 className='text-2xl'>      Discover tasty restaurants!
</h3 >
      {filteredRestaurants.length === 0 ? (
        <NoSearchResults />
      ) : (
        <InfiniteScroll
          dataLength={visibleRestaurants.length}
          next={fetchMoreData}
          hasMore={visibleRestaurants.length < filteredRestaurants.length}
          loader={<h3>Loading... </h3>}
          endMessage={<p className="text-center"><b>No more restaurants</b></p>}
        >
          <section className="md:grid  md:grid-cols-3 2xl:grid-cols-4  gap-6 place-items-center m-auto w-full">
            {visibleRestaurants.map((restaurant) => (
              <Restaurant key={restaurant.id} restaurant={restaurant} />
            ))}
          </section>
        </InfiniteScroll>
      )}

    </>
  );
};

export default Restaurants;
