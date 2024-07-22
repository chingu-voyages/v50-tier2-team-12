import { useEffect, useRef } from 'react';
import { cn } from '../../utils/utils';

export default function ModalWrapper({
  isDialogOpen,
  confirmText = 'confirm',
  cancelText = 'close',
  showConfirm = true,
  showCancel = true,
  children,
  className = '',
  onConfirm = () => {},
  onClose = () => {},
}) {
  const dialogRef = useRef();

  useEffect(() => {
    if (isDialogOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isDialogOpen]);

  const handleClose = () => {
    onClose();
  };

  const handleClickOutside = (event) => {
    if (event.target !== dialogRef.current) return;

    handleClose();
  };

  const handleConfirm = () => {
    onConfirm();
  };
  return (
    <dialog
      className={cn(
        'bg-[#C0C0C08A] w-2/3  bg-white rounded-2xl overflow-hidden',
        className
      )}
      onClick={handleClickOutside}
      ref={dialogRef}
      onClose={handleClose}
    >
      <div className='w-full h-full p-5 pb-0'>{children}</div>
      <div className='flex gap-4 w-full px-5 pb-5'>
        {showCancel ? (
          <button
            type='button'
            onClick={handleClose}
            className='border-1 border-primary-violet capitalize font-semibold text-xs text-primary-violet rounded-5p w-full py-2 px-5'
          >
            {cancelText}
          </button>
        ) : null}
        {showConfirm ? (
          <button
            onClick={handleConfirm}
            className='capitalize bg-primary-violet text-white text-xs font-semibold rounded-5p w-full py-2 px-5'
          >
            {confirmText}
          </button>
        ) : null}
      </div>
    </dialog>
  );
}
