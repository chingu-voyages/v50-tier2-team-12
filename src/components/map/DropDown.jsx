import { useState } from 'react';
import { cn } from '../../utils/utils';
import { Icons } from '../Icons';

export default function DropDown({
  value,
  handleChange,
  options,
  label,
  showDefaultOption = false,
  defaultOptionLabel = '',
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleOptionClick = (value) => {
    handleChange(value);
    toggleDropdown();
  };

  return (
    <section className='relative font-roboto mb-3 md:mt-8 md:mb-6 max-w-[23.875rem]'>
      <button
        onClick={toggleDropdown}
        className='flex items-center justify-between w-full bg-light-grey px-4 rounded-lg py-2 outline-none focus-visible:outline focus-visible:outline-primary-violet'
      >
        <span>{value || label}</span>

        <Icons.downArrow
          className={cn(
            'transition-transform duration-200 ease-linear',
            isDropdownVisible ? 'rotate-180' : ''
          )}
        />
      </button>

      {isDropdownVisible ? (
        <div className='absolute top-full inset-0 bg-light-grey rounded-md h-80 overflow-y-scroll mt-1 z-high flex flex-col gap-2 justify-start items-start outline outline-primary-violet animate-accordion-down'>
          {showDefaultOption && value ? (
            <Option
              handleOptionClick={handleOptionClick}
              label={defaultOptionLabel || label}
              value={''}
            />
          ) : null}
          {options.map((option) => {
            const isActiveOption = option === value;
            return (
              <Option
                key={option}
                label={option}
                value={option}
                handleOptionClick={handleOptionClick}
                isActiveOption={isActiveOption}
              />
            );
          })}
        </div>
      ) : null}
    </section>
  );
}

function Option({ isActiveOption, label, handleOptionClick, value }) {
  return (
    <button
      onClick={() => handleOptionClick(value)}
      className={cn(
        'py-2 px-4 block w-full transition-colors duration-200 ease-linear text-left',
        isActiveOption ? ' bg-light-violet' : ' hover:bg-light-violet/90'
      )}
    >
      {label}
    </button>
  );
}
