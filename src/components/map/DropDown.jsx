import { useState } from 'react';
import { cn } from '../../utils/utils';
import { Icons } from '../Icons';

export default function DropDown({ value, handleChange, options, label }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleOptionClick = (value) => {
    handleChange(value);
    toggleDropdown();
  };

  return (
    <section className='relative font-roboto mb-3'>
      <button
        onClick={toggleDropdown}
        className='flex items-center justify-between w-full bg-light-grey px-4 rounded-lg py-2'
      >
        <span>{value ? value : label}</span>

        <Icons.downArrow
          className={cn(
            'transition-transform duration-200 ease-linear',
            isDropdownVisible ? 'rotate-180' : ''
          )}
        />
      </button>

      {isDropdownVisible ? (
        <div className='absolute top-full inset-0 bg-light-grey rounded-md h-80 overflow-y-scroll mt-2 z-high flex flex-col gap-2 justify-start items-start max-w-sm hover:outline hover:outline-primary-violet animate-accordion-down'>
          {options.map((option) => {
            const isActiveOption = option === value;
            return (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={cn(
                  'py-2 px-4 block w-full transition-colors duration-200 ease-linear',
                  isActiveOption
                    ? ' bg-primary-violet/40'
                    : ' hover:bg-light-violet'
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
