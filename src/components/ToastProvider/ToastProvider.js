import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const pushToast = React.useCallback(
    (toast) => {
      setToasts([...toasts, toast]);
    },
    [toasts]
  );

  const removeToast = React.useCallback(
    (toastId) => {
      setToasts(toasts.filter((t) => t.id !== toastId));
    },
    [toasts]
  );

  return (
    <ToastContext.Provider value={{ toasts, pushToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
