import React from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({ children, setModal }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div
        className="cursor-pointer absolute top-6 right-10"
        onClick={(e) => setModal(false)}
      >
        <i className="fa-solid text-2xl text-white p-2   fa-x"></i>
      </div>
      <div className="modal__content inline-block my-4 mx-auto ">
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
