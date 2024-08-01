import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function fetchMenus() {
  try {
    const res = await fetch('https://menus-api.vercel.app/');
    return res;
  } catch (error) {
    throw new Response('An error occurred while fetching data', {
      status: 404,
    });
  }
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
