import { Outlet } from 'react-router-dom';
import MobileNavbar from './components/navigation/MobileNavbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <header>
        <MobileNavbar />
      </header>
      <main className='px-5 pt-5 mb-24 md:mb-0'>
        <Outlet />
        <div className='fixed inset-x-0 bottom-16 flex justify-center bg-white'>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
