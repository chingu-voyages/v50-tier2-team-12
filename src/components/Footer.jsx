import { Icons } from './Icons';

export function Footer() {
  return (
    <span className='text-gray-400'>
      <a
        href='https://github.com/chingu-voyages/v50-tier2-team-12'
        target='_blank'
        className='flex items-center gap-x-1.5'
      >
        &copy; 2024 Team 12 of Voyage 50 <Icons.github />
      </a>
    </span>
  );
}
