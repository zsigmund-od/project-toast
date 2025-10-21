import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

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

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(clearToasts);

  return (
    <ToastContext.Provider value={{ toasts, pushToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
