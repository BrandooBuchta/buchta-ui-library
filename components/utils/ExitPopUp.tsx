import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

interface ExitPopupProps {
  title: string;
  subTitle: string;
  image: string;
  form: JSX.Element;
}

const ExitPopup: React.FC<ExitPopupProps> = ({
  title,
  subTitle,
  image,
  form,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasSeenPopup = Cookies.get("hasSeenPopup");

    if (!hasSeenPopup) {
      const handleExitIntent = (event: MouseEvent) => {
        if (event.clientY < 5) {
          setIsVisible(true);
          Cookies.set("hasSeenPopup", "true", { expires: 7 });
        }
      };

      document.addEventListener("mousemove", handleExitIntent);

      return () => {
        document.removeEventListener("mousemove", handleExitIntent);
      };
    }
  }, []);

  // Handle clicking outside of the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div
        ref={popupRef}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto flex relative"
      >
        {/* X button for closing */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setIsVisible(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="w-2/3 p-8">
          <h2 className="text-3xl font-extrabold text-center mb-4 text-gray-800">
            {title}
          </h2>
          <p className="text-lg text-center mb-6 text-gray-600">{subTitle}</p>
          {form}
        </div>
        <div
          className="w-1/3 rounded-r-3xl bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  );
};

export default ExitPopup;
