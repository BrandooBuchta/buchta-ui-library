import React, { useState, FC } from "react";

const EmailModal: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const onSubmit = () => {
    // Logic for submitting email, e.g., API call
    console.log("Email submitted: ", email);
    setIsOpen(false); // Close the modal after submission
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white rounded-full px-6 py-2 mt-4"
        onClick={() => setIsOpen(true)}
      >
        Otevřít Email Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <button
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          />
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl z-10">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <div className="flex">
                <div>
                  <img
                    alt="Ukázka Brandoo"
                    className="w-64"
                    src="/brandoo-preview.webp"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <h2 className="text-2xl font-bold text-black mt-4">
                    Buďte u toho jako první!
                  </h2>
                  <p className="text-xl text-gray-700 mt-2">
                    Zadejte vaší skutečnou emailovou adresu a my se vám na ní
                    ozveme jako prvnímu až Brandoo bude připravené!
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full mt-6">
                <input
                  className="border-2 border-gray-300 rounded-full px-4 py-2 w-full"
                  placeholder="Váš E-Mail"
                  type="email"
                  onChange={({ target: { value } }) => setEmail(value)}
                />
                <button
                  className="bg-pink-500 text-white rounded-full px-6 py-2 mt-4"
                  onClick={onSubmit}
                >
                  Chci u toho být jako první!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailModal;
