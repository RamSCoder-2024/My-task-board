import React, { useState } from "react";
import iconHuman from '../assets/icons/icon-hombre.webp';
import iconCafe from '../assets/icons/icon-cafe.webp';
import iconLibros from '../assets/icons/icon-libros.webp';
import statusProgress from '../assets/time.webp';
import statusCompleted from '../assets/done.webp';
import statusStop from '../assets/close_round.webp';

interface ModalProps {
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
    const [task, setTask] = useState<{
        title: string;
        description: string;
        icon: string;
        status: string;
    }>({
        title: '',
        description: '',
        icon: '',
        status: '',
    });

    //Guardar el nombre y el valor de los inputs en el estado task
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setTask((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputChange = (name: string, value: string) => {
        setTask((prev) => ({ ...prev, [name]: value }));
    }

    //Enviar formulario al servidor
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            //Solicitud HTTP POST
            const request = await fetch('/addTask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task),
            });

            if (!request.ok) {
                console.error('error al procesar la solicitud');
            }
            const data = await request.json();
            console.log('Datos del servidor:');
            console.log(`Title: ${data.title}`);
            console.log(`Description: ${data.description}`);
            console.log(`Icon: ${data.icon}`);
            console.log(`Status: ${data.status}`);

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
                        <label htmlFor="iconTask" className="text-left">Icon</label>
                        <div className="flex items-start">
                            {[
                                ['iconTask1', iconHuman, 'icon-hombre.webp'],
                                ['iconTask2', iconCafe, 'icon-cafe.webp'],
                                ['iconTask3', iconLibros, 'icon-libros.webp'],
                            ].map(([id, img, nameIcon, i]) => (
                                <div key={i} className="mr-2">
                                    <input
                                        type="radio"
                                        name="iconTask"
                                        id={id}
                                        className="hidden peer"
                                        onClick={() => handleInputChange('icon', nameIcon)}
                                        required
                                    />
                                    <label htmlFor={id} className="cursor-pointer h-10 w-10 p-1 rounded-lg bg-gray-300 flex items-center justify-center peer-checked:bg-orange-300">
                                        <img src={img} alt="iconHuman" className="w-6 h-6" />
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="statusTask" className="text-left">Status</label>
                            <div className="flex flex-wrap">
                                {[
                                    [statusProgress, 'bg-orange-400', 'In progress', 'statusProgress'],
                                    [statusCompleted, 'bg-green-400', 'Completed', 'statusCompleted'],
                                    [statusStop, 'bg-red-400', "Won't do", 'statusStop'],
                                ].map(([statusImg, color, name, id, i]) => (
                                    <label key={i} htmlFor={id} className="border border-slate-900 h-10 w-36 rounded-xl flex items-center mr-3 mb-3">
                                        <span className={`h-7 w-7 ml-1 p-1 ${color} rounded-xl`}>
                                            <img src={statusImg} alt="statusProgress" />
                                        </span>
                                        <p className="pl-2 text-sm">{name}</p>
                                        <input
                                            type="radio"
                                            name="status"
                                            id={id}
                                            className="ml-3 h-4 w-4"
                                            onClick={() => handleInputChange('status', name)}
                                            required
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
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