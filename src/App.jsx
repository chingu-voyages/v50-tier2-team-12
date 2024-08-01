import { Outlet } from 'react-router-dom';
import MobileNavbar from './components/navigation/MobileNavbar';
import { Footer } from './components/Footer';
import { useState } from 'react';

function App() {
  const [credits, setCredits] = useState(40);
  const [isCredits, setIsCredits] = useState(false);

  return (
    <>
      <header>
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
