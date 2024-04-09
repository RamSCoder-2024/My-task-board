import React from "react";

interface ModalProps {
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
    return (
        <div className="absolute h-screen w-screen top-0 left-0 outline bg-slate-300 text-slate-300">
            <button className="absolute top-1 right-1 p-1 bg-slate-800 cursor-pointer" onClick={closeModal}>
                Cerrar
            </button>
            <div className="bg-white w-100">
                <h1 className="font-outfit text-slate-800 font-semibold text-left p-3">Task details</h1>
                <form className="border-cyan-300 bg-slate-500 pl-1 pr-1">
                    <div className="flex flex-col">
                        <label className="text-left">Task name</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-left">Description</label>
                        <textarea name="" id=""></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;