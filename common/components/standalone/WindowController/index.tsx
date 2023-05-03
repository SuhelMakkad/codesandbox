import React from "react";

const toggleButtons = [
  {
    controlId: "terminal",
    label: "terminal",
  },
  {
    controlId: "editor",
    label: "editor",
  },
  {
    controlId: "browser",
    label: "browser",
  },
  {
    controlId: "all",
    label: "all",
  },
];
const WindowController = () => {
  return (
    <footer className="mr-2 flex items-center justify-end border-b border-t border-neutral-600 text-sm">
      {toggleButtons.map((button) => (
        <button
          key={button.controlId}
          className="px-2 py-1 capitalize hover:bg-gray-700"
        >
          {button.label}
        </button>
      ))}
    </footer>
  );
};

export default WindowController;
