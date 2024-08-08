import { useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Footer } from './components/Footer';
import MainHeader from './components/navigation/MainHeader';
import CustomToaster from './components/toaster/CustomToaster';

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
      <ScrollRestoration />
      <CustomToaster />
      <MainHeader />
      <main className='px-7 pt-5 flex-grow md:px-0'>
        <Outlet context={{ credits, setCredits, isCredits, setIsCredits }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
