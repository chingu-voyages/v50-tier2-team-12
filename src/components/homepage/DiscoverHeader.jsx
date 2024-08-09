
const DiscoverHeader = ({ isEmptySearchResult }) => {
  if (isEmptySearchResult) return null;

  return (
    <h3 className='text-2xl row-start-2 md:col-start-1 md:col-end-3 text-nowrap text-black font-work-sans font-semibold tracking-tight'>
      Discover tasty restaurants!
    </h3>
  );
};

export default DiscoverHeader;
