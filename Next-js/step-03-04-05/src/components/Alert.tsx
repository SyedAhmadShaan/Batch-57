import React, { ReactNode } from "react";
import { text } from "stream/consumers";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div
      role="alert"
      className="alert-1 mb-4 relative flex w-2/3 p-3 text-sm text-white bg-blue-600 rounded-md"
    >
      <span className="flex-grow">{children}</span>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-1"
        aria-label="Close"
        onClick={onClose}
      >
        &times;
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
};

export default Alert;
