import { useState } from 'react';
import PageHeading from '../../components/headings/PageHeading';
import Credits from '../../components/credits/Credits';

export default function CreditsPage() {
  const [isCredits, setIsCredits] = useState(false);

  const credits = 40;

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
      />
    </>
  );
}
