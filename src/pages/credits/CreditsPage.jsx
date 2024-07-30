import { useState } from 'react';
import PageHeading from '../../components/headings/PageHeading';
import Credits from '../../components/credits/Credits';
import AddCreditsModal from '../../components/modals/AddCreditsModal';

export default function CreditsPage() {
  const [credits, setCredits] = useState('40.00');
  const [isCredits, setIsCredits] = useState(false);
  const [isAddCreditsModalOpen, setIsAddCreditsModalOpen] = useState(false);

  const toggleIsCredits = () => {
    setIsCredits((prev) => !prev);
  };

  return (
    <>
      <PageHeading title={'credits'} />
      <Credits
        credits={credits}
        isCredits={isCredits}
        toggleIsCredits={toggleIsCredits}
        setIsAddCreditsModalOpen={setIsAddCreditsModalOpen}
      />
      <AddCreditsModal
        isOpen={isAddCreditsModalOpen}
        setCredits={setCredits}
        setIsOpen={setIsAddCreditsModalOpen}
      />
    </>
  );
}
