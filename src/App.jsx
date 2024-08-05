import { Outlet } from 'react-router-dom';
import MobileNavbar from './components/navigation/MobileNavbar';
import { Footer } from './components/Footer';
import CustomToaster from './components/toaster/CustomToaster';
import { useEffect, useState } from 'react';

function App() {
  const [credits, setCredits] = useState(() => {
    // Load credits from local storage or initialize to $40 if no storage exists yet
    const storedCredits = localStorage.getItem('credits');
    return storedCredits ? JSON.parse(storedCredits) : 40;
  });
  const [isCredits, setIsCredits] = useState(false);

  // Side effect to update local storage every time credit changes
  useEffect(() => {
    localStorage.setItem('credits', JSON.stringify(credits));
  }, [credits]);

  return (
    <>
      <header>
        <CustomToaster />
        <MobileNavbar />
      </header>
      <main className='px-5 pt-5 flex-grow'>
        <Outlet context={{ credits, setCredits, isCredits, setIsCredits }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
