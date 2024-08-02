import { Outlet } from 'react-router-dom';
import MobileNavbar from './components/navigation/MobileNavbar';
import { Footer } from './components/Footer';
import CustomToaster from './components/toaster/CustomToaster';

function App() {
  return (
    <>
      <header>
        <CustomToaster />
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
