import { clsx } from 'clsx';
import { defer } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function fetchMenus() {
  const res = fetch('https://menus-api.vercel.app/').then((res) => res.json());
  return defer({ data: res });
}


// remove duplicate items in an array
export function removeDuplicates(items, filterKey) {
  const seenIds = new Set();

  const noDuplicates = items.filter((item) => {
    if (seenIds.has(item[filterKey])) return false;
    seenIds.add(item[filterKey]);
    return true;
  });

  return noDuplicates;
}


export const moveBestFoodsToSecond = (categories) => {
  const bestFoodsIndex = categories.indexOf("best-foods");
  if (bestFoodsIndex !== -1) {
    const bestFoods = categories.splice(bestFoodsIndex, 1)[0];
    categories.splice(0, 0, bestFoods);
  }
  return categories;
}



