import React, { useEffect, useState } from "react";

interface ExitPopupProps {
  title: string;
  message: string;
  onClose: () => void;
}

const ExitPopup: React.FC<ExitPopupProps> = ({ title, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleExitIntent = (event: MouseEvent) => {
      if (event.clientY < 5) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mousemove", handleExitIntent);

    return () => {
      document.removeEventListener("mousemove", handleExitIntent);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ExitPopup;
