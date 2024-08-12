import { Icons } from './Icons';

// className='fixed inset-x-0 bottom-16 flex justify-center bg-white'

export function Footer() {
  return (
    <footer className='text-gray-400 flex justify-center mb-16 p-4 md:mb-0'>
      <a
        href='https://github.com/chingu-voyages/v50-tier2-team-12'
        target='_blank'
        className='flex items-center gap-x-1.5 text-grey'
      >
        &copy; {new Date().getFullYear()} Team 12 of Voyage 50 <Icons.github />
      </a>
    </footer>
  );
}
