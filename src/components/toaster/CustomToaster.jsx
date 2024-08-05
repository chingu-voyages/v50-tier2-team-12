import { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

const defaultToastOptions = {
  style: {
    borderRadius: '8px',
    backgroundColor: '#F7EFFF',
    zIndex: '9999',
  },
};

const CustomToaster = () => {
  const { toasts } = useToasterStore();
  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return <Toaster toastOptions={defaultToastOptions} maxCount={1} />;
};

export default CustomToaster;
