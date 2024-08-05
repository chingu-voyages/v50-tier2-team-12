import PageHeading from '../../components/headings/PageHeading';
import Credits from '../../components/credits/Credits';
import AddCreditsModal from '../../components/modals/AddCreditsModal';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

export default function CreditsPage() {
  const { credits, setCredits, isCredits, setIsCredits } = useOutletContext();
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
