import { Icons } from '../Icons';

const Search = ({ value, onChange }) => {
  return (
    <label className="flex w-full bg-gray-100 items-center px-2 rounded-lg focus-within:outline-primary-violet outline outline-2 outline-transparent transition-all duration-200 transform hover:shadow-lg focus-within:shadow-lg">
      <Icons.search className="w-6 h-6" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent py-2 px-4 placeholder-gray-500 font-light focus:outline-none"
        placeholder="Search for food, restaurants..."
      />
    </label>
  );
}

export default Search;
