import CreditsInput from '../credits/CreditsInput';
import ModalWrapper from './ModalWrapper';

export default function AddCreditsModal({
  setIsOpen,
  isOpen,
  creditAmount,
  setCreditAmount,
  addCredits,
}) {
  const onClose = () => {
    setCreditAmount('');
    setIsOpen(false);
  };

  const onConfirm = () => {
    if (creditAmount === '') return;
    addCredits();
    onClose();
  };

  return (
    <ModalWrapper
      onClose={onClose}
      onConfirm={onConfirm}
      confirmText='done'
      isDialogOpen={isOpen}
      className='max-w-64'
    >
      <h3 className='font-semibold'>Enter Credits</h3>

      <p className='text-grey my-5 text-xs md:text-sm'>
        Enter how many credits you want
      </p>

      <CreditsInput value={creditAmount} onChange={setCreditAmount} />
    </ModalWrapper>
  );
}
