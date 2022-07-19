import React from "react";

const Modal = ({ popup }) => {
  if (!popup) {
    return;
  }

  return (
    <div className="modal-menu">
      <a href="https://www.google.com">How To Use</a>
      <a href="https://www.google.com">About</a>
      <a href="https://www.google.com">Support</a>
      <a href="https://www.google.com">Contact</a>
      <a href="https://www.google.com">Donate</a>
    </div>
  );
};

export default Modal;
