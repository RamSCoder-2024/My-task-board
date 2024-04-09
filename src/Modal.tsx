import React from "react";

interface ModalProps {
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
    return (
        <div className="bg-slate-800 text-slate-300 mt-4">
            <div className="flex flex-row-reverse justify-between items-center gap-10 h-16 bg-white w-100">
                <button className="bg-slate-800 h-full cursor-pointer w-1/4" onClick={closeModal}>
                   Cerrar
                </button>
                <div className="text-slate-800 font-bold pl-3">
                    Crear New Task
                </div>
            </div>
        </div>
    );
};

export default Modal;