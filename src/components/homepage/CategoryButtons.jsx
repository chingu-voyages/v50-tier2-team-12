
const CategoryButtons = ({ allCategories, activeCategory, handleCategoryClick  }) => {
 

  return (
    <div className='row-start-1 md:col-start-1 md:col-end-13 flex items-center lg:gap-6 gap-4 max-w-full m-auto overflow-scroll no-scrollbar'>
      <button
        className={`w-max font-work-sans font-medium text-base text-grey ${!activeCategory && 'text-primary-violet decoration-primary-violet decoration-2 underline underline-offset-4 font-semibold '}`}
        onClick={() => handleCategoryClick("")}
      >
        All
      </button>
      {allCategories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            className={`w-max text-nowrap font-work-sans font-medium text-base text-grey ${isActive ? 'text-primary-violet decoration-primary-violet decoration-2 underline underline-offset-4 font-semibold ' : 'text-nowrap'}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryButtons;
