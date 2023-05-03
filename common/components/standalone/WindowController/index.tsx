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
    <footer className="mr-2 flex items-center justify-end border-b border-t border-neutral-600 text-sm text-neutral-200">
      {toggleButtons.map((button) => (
        <button
          key={button.controlId}
          className="px-2 py-1 capitalize transition-colors hover:bg-neutral-800 hover:text-neutral-50"
        >
          {button.label}
        </button>
      ))}
    </footer>
  );
};

export default WindowController;
