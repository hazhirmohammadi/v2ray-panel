import React from 'react';
import useModalStore from "../Store.js";


const Modal = ({ isOpen, onClose, children }) => {
   const {dataView}=useModalStore();

   if (!isOpen) {
      return null;
   }

   return (
       <div className="modal">
          <div className="modal-content">
             <button className="close-button " onClick={onClose}>
                Close
             </button>
             {children}
          </div>
       </div>
   );
};

export default Modal;
