import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Restaurant from './Restaurant';
import Search from '../Search/Search';
import NoSearchResults from '../Search/NoSearchResults';
import { moveBestFoodsToSecond, removeDuplicates } from '../../utils/utils';
import CategoryButtons from './CategoryButtons';
import DiscoverHeader from './DiscoverHeader';
import TryTastyRestaurants from './TryTastyRestaurants';

const Restaurants = ({ menu }) => {
  const [activeCategory, setActiveCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState("");
  const itemsPerPage = 12;

  // eslint-disable-next-line
  const { pagination, 'our-foods': ourFoods, ...restMenus } = menu || {};
  const allCategories = Object.keys(restMenus) || [];
  moveBestFoodsToSecond(allCategories);
  const allMenus = Object.values(restMenus).flat();

  const updateFilter = (value) => setSearchFilter(value);

  const getUniqueRestaurants = (restaurants) => removeDuplicates(restaurants, 'name');

  const fetchMoreData = () => setCurrentPage(currentPage + 1);

  const displayedMenu = activeCategory
    ? restMenus[activeCategory]
    : getUniqueRestaurants(allMenus);

  const filteredRestaurants = displayedMenu.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchFilter.toLowerCase()) || restaurant.dsc.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const visibleRestaurants = filteredRestaurants.slice(0, currentPage * itemsPerPage);

  const isEmptySearchResult = filteredRestaurants.length === 0;

  const handleCategoryClick = (value) => {
    setActiveCategory(value);
    setCurrentPage(1);
  };


  return (
    <>
      <section className={`md:grid grid-cols-12 grid-rows-2 space-y-4 gap-8 w-full `}>
        <Search value={searchFilter} onChange={updateFilter} />
        <CategoryButtons
          allCategories={allCategories}
          activeCategory={activeCategory}
          handleCategoryClick={handleCategoryClick}
        />
        <DiscoverHeader isEmptySearchResult={isEmptySearchResult} />
      </section>

      {isEmptySearchResult ? (
        <>
          <NoSearchResults />
          <TryTastyRestaurants restaurants={displayedMenu.slice(0, 10)} />
        </>
      ) : (
        <InfiniteScroll
          dataLength={visibleRestaurants.length}
          next={fetchMoreData}
          hasMore={visibleRestaurants.length < filteredRestaurants.length}
          loader={<h3>Loading... </h3>}
          endMessage={<p className="text-center"><b>No more restaurants</b></p>}
        >
          <section className="md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center md:place-content-between w-full overflow-hidden">
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
