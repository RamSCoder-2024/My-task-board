import React, { useState } from "react";
import iconHuman from '../../public/icons/icon-hombre.webp';
import iconCafe from '../../public/icons/icon-cafe.webp';
import iconLibros from '../../public/icons/icon-libros.webp';
import iconExercises from '../../public/icons/icon-pesas.webp';
import iconmensage from '../../public/icons/icon-mensaje.webp';
import iconreloj from '../../public/icons/icon-reloj.webp';
import statusProgress from '../../public/status/time.webp';
import statusCompleted from '../../public/status/done.webp';
import statusStop from '../../public/status/close_round.webp';
import clse from '../assets/close_ring.webp';
import selectDone from '../assets/done_round.webp';
import trush from '../assets/trash.webp';
import '../index.css';

interface ModalProps {
    closeModal: () => void;
}
interface AddTask {
    title: string,
    description: string,
    icon: string,
    status: string,
}
const Modal: React.FC<ModalProps> = ({ closeModal }) => {
    const [statuss, setStatuss] = useState<string>('');
    const [task, setTask] = useState<AddTask>({
        title: '',
        description: '',
        icon: '',
        status: '',
    });

    //Guardar el nombre y el valor de los inputs en el estado task
    const handleChange = (e: any) => {
        const { name, value, id } = e.target;
        setTask((prev) => ({ ...prev, [name]: value }));
        console.log(`name: ${name}, value: ${id}`);
        setStatuss(id);
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
            if (!request.ok) console.error('error al procesar la solicitud');

        } catch (e) {
            console.error(e + 'Erro al enviar la solicitud')
        }
    }
    return (
        <div className="h-screen w-screen bg-bgblack fixed top-0 left-0">
            <div className="sm:left-auto sm:right-0 sm:max-w-lg absolute h-screen w-screen top-0 left-0 outline outline-none text-slate-300">
                <button className="outline outline-slate-200 rounded-md outline-1 transition hover:bg-slate-100 absolute top-3 right-3 p-1 cursor-pointer h-8 w-8" onClick={closeModal}>
                    <img src={clse} />
                </button>
                <div className="bg-white w-100 h-screen">
                    <h1 className="font-outfit text-slate-800 font-semibold text-left pl-5 pt-4 pb-4">
                        Task details
                    </h1>
                    <form onSubmit={handleSubmit} className="border-cyan-30 px-3 sm:px-5">
                        {/* TITULO DE LA TAREA */}
                        <div className="flex flex-col">
                            <label htmlFor="titleTask"
                                className="text-left pt-3 text-sm text-slate-500"
                            >
                                Task name
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="titleTask"
                                value={task.title}
                                className="text-slate-500 pl-3 mt-2 py-2 bg-white border border-slate-300 rounded-md placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1"
                                onChange={handleChange}
                                placeholder="Enter a short task"
                                required
                            />
                        </div>
                        {/* DESCRIPCION DE LA TAREA */}
                        <div className="flex flex-col">
                            <label htmlFor="descriptionTask"
                                className="text-left pt-3 text-sm text-slate-500"
                            >
                                Description
                            </label>
                            <textarea
                                name="description"
                                id="descriptionTask"
                                value={task.description}
                                onChange={handleChange}
                                className="text-slate-500 h-36 resize-none pl-3 pr-3 mt-2 py-2 bg-white border border-slate-300 rounded-md placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1"
                                placeholder="Enter a short description"
                            ></textarea>
                        </div>
                        {/* ICONO DE LA TAREA */}
                        <div className="flex flex-col">
                            <label htmlFor="iconTask"
                                className="text-left pt-3 text-sm text-slate-500"
                            >
                                Icon
                            </label>
                            <div className="flex items-start mt-2 flex-wrap">
                                {[
                                    ['iconTask1', iconHuman, 'icon-hombre.webp'],
                                    ['iconTask2', iconCafe, 'icon-cafe.webp'],
                                    ['iconTask3', iconLibros, 'icon-libros.webp'],
                                    ['iconTask4', iconExercises, 'icon-pesas.webp'],
                                    ['iconTask5', iconmensage, 'icon-mensaje.webp'],
                                    ['iconTask6', iconreloj, 'icon-reloj.webp'],
                                ].map(([id, img, nameIcon, i]) => (
                                    <div key={i} className="mr-2 mb-2">
                                        <input
                                            type="radio"
                                            name="icon"
                                            id={id}
                                            className="hidden peer"
                                            value={nameIcon}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label htmlFor={id} className="cursor-pointer h-10 w-10 p-1 rounded-lg bg-slate-200 flex items-center justify-center peer-checked:bg-orange-300 hover:bg-orange-300">
                                            <img src={img} alt="iconHuman" className="w-6 h-6" />
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* ESTADO DE LA TAREA */}
                        <div className="flex flex-col mb-8">
                            <label htmlFor="statusTask"
                                className="text-left pt-3 text-sm text-slate-500"
                            >
                                Status
                            </label>
                            <div className="flex flex-wrap mt-2">
                                {[
                                    [statusProgress, 'bg-orange-400', 'In progress', 'statusProgress'],
                                    [statusCompleted, 'bg-green-400', 'Completed', 'statusCompleted'],
                                    [statusStop, 'bg-red-400', "Won't do", 'statusStop'],
                                ].map(([statusImg, color, name, id, i]) => (
                                    <label key={i} htmlFor={id}
                                        className={`${statuss === id ? 'border-sky-500 border-2' : 'border-slate-300'} border h-10 rounded-md flex items-center mr-3 mb-3`}
                                    >
                                        <span className={`h-8 w-8 ml-1 p-1.5 ${color} rounded-md`}>
                                            <img src={statusImg} alt="statusProgress" />
                                        </span>
                                        <p className={`pl-5 text-sm font-outfit text-slate-600 pr-8 ${statuss === id ? 'font-semibold' : ''}`}>{name}</p>
                                        <input
                                            type="radio"
                                            name="status"
                                            id={id}
                                            className="ml-3 h-4 w-4 peer hidden"
                                            onChange={handleChange}
                                            required
                                        />
                                        <div
                                            className="w-4 h-4 bg-transparent border border-slate-400 rounded-full peer-checked:bg-sky-500  peer-checked:border-sky-500 peer-hover:shadow-lg transition mr-2"
                                        ></div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button
                                type="submit"
                                className="hover:scale-105 transition bg-deleteColor rounded-xl font-outfit flex flex-row items-center w-24 justify-center py-1">
                                Delete
                                <img src={trush}
                                    className="h-6 w-6"
                                />
                            </button>
                            <button
                                type="submit"
                                className="hover:scale-105 transition bg-doneColor rounded-xl font-outfit flex flex-row items-center w-24 justify-center py-1">
                                Save
                                <img src={selectDone}
                                    className="h-6 w-6"
                                />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;