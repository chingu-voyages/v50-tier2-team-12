import { Outlet } from 'react-router-dom';
import MobileNavbar from './components/navigation/MobileNavbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <header>
        <MobileNavbar />
      </header>
      <main className='px-5 pt-5 flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
