import React from "react";

export default function Modal({ answer, isOpen, onClose }) {
  if (isOpen === false) return null;
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50" />
      <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
        {answer ? (
          <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 p-4 rounded-lg shadow-lg text-black">
            <p className="text-black font-bold">답변</p>
            <div className="m-5 text-black">{answer}</div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={onClose}
              >
                확인
              </button>
            </div>
          </div>
        ) : (
          <div>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
