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
