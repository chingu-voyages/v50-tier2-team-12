import { Outlet } from 'react-router-dom';
import MobileNavbar from './components/navigation/MobileNavbar';

function App() {
  return (
    <>
      <header>
        <MobileNavbar />
      </header>
      <main className='mb-24 md:mb-0'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
