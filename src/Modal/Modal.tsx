import React, { useState } from "react";

interface ModalProps {
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setTask((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const request = await fetch('/addTask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task),
            });

            if (!request.ok) {
                console.error('error al procesar la solicitud');
            }
            const data = await request.json();
            console.log(`Datos del servidor:<br/>${data.title} && ${data.description}`);

        } catch (e) {
            console.error(e + 'Erro al enviar la solicitud')
        }
    }
    return (
        <div className="absolute h-screen w-screen top-0 left-0 outline bg-slate-300 text-slate-300">
            <button className="absolute top-1 right-1 p-1 bg-slate-800 cursor-pointer" onClick={closeModal}>
                Cerrar
            </button>
            <div className="bg-white w-100">
                <h1 className="font-outfit text-slate-800 font-semibold text-left p-3">Task details</h1>
                <form onSubmit={handleSubmit} className="border-cyan-300 bg-slate-500 pl-1 pr-1">
                    <div className="flex flex-col">
                        <label htmlFor="titleTask" className="text-left">Task name</label>
                        <input
                            type="text"
                            name="title"
                            id="titleTask"
                            value={task.title}
                            onChange={handleChange}
                            placeholder="Enter a short task"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="descriptionTask" className="text-left">Description</label>
                        <textarea
                            name="description"
                            id="descriptionTask"
                            value={task.description}
                            onChange={handleChange}
                            placeholder="Enter a short description"
                        ></textarea>
                    </div>
                    <div className="flex flex-col">
                        <button type="submit" className="p-3 bg-slate-800 mb-2 mt-2">Add</button>
                        <button type="button" className="p-3 bg-slate-800 mb-2">Delete</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;