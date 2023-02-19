import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children}) {

  const [toasts, setToasts] = React.useState([]);

  const dismissAll = React.useCallback(() => setToasts([]), []);
  useEscapeKey(dismissAll);

  function addToast(variant, message) {

    const id = Math.random().toString(36);

    function dismiss() {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    }  

    setToasts((toasts) => [
      ...toasts,
      {
        id,
        message,
        variant,
        dismiss,
      }
    ]);
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
