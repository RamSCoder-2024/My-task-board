import React, { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import './index.css'
import TaskItem from './TaskItem';
import edit from './assets/edit.webp';
import logo from './assets/Logo.webp';
import progress from '../public/status/time.webp';
import completed from '../public/status/done.webp';
import delelte from '../public/status/close_round.webp';
import iconBooks from '../public/icons/icon-libros.webp';
import iconExercises from '../public/icons/icon-pesas.webp';
import iconCooffee from '../public/icons/icon-cafe.webp';
import addTask from './assets/add_round.webp';

export interface Task {
  id: number,
  title: string,
  description: string,
  icon: string,
  status: string,
}

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [datos, setDatos] = useState<Task[]>([]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const sendTask = async () => {
      try {
        const response = await fetch('/getAllTasks', {
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        if (response.ok) setDatos(data);

      } catch (e) {
        console.error(e + 'Error en la solicitud');
      }
    }
    sendTask();
  }, []);


  return (
    <>
      <main className='shadow-slate-50 mt-1 p-4 w-full max-w-full sm:max-w-md'>
        <div className='flex h-12'>
          <img src={logo}
            className='p-2 mr-1'
            alt='logo'
            title='logo'
          />
          <h2 className='font-outfit mr-1 mt-2 text-3xl text-left'>My Task Board</h2>
          <img src={edit}
            className='ml-1 pt-4 pb-1 cursor-pointer'
            alt='edit'
            title='edit'
          />
        </div>
        <p className='font-outfit text-sm pl-12 mt-1 text-left mb-7'>Tasks to keep organised</p>
        {/*  TAREAS INCIALES */}
        {[
          [iconBooks, 'in progress', progress, 'bg-progress', 'bg-stprogress'],
          [iconExercises, 'Completed', completed, 'bg-completed', 'bg-stcompleted'],
          [iconCooffee, "Won't Do", delelte, 'bg-delete', 'bg-stdelete'],
        ].map(([icon, text, iconstatus, bgstatus, bgstatuss], i) => (
          <div key={i} className={`transition hover:scale-105 cursor-pointer rounded-xl items-start flex ${bgstatus} text-slate-900 text-left mb-3 p-2`}>
            <div className='justify-center items-center flex bg-bgicon rounded-lg ml-1 h-9 w-12 p-1'>
              <img src={icon}
                className='scale-75'
              />
            </div>
            <div className='mt-1.5 ml-4 w-full flex flex-col items-start'>
              <h2 className='font-outfit font-bold text-md'>
                Task {text}
              </h2>
            </div>
            <div className={`justify-center items-start flex ${bgstatuss} rounded-lg mr-1 h-9 w-12`}>
              <img src={iconstatus}
                className='scale-75'
              />
            </div>
          </div>
        ))}
        {/* TAREAS DINAMICAS */}
        {datos.map((task, i) => {
          return (
            <TaskItem key={i} task={task} />
          )
        })}
        {/***********/}
        <div onClick={openModal} className='hover:bg-addTask2 transition hover:scale-105 cursor-pointer rounded-xl items-start flex bg-addTask text-slate-900 text-left mb-3 p-2'>
          <div className='justify-center items-center flex bg-stprogress rounded-lg ml-1 h-9 w-10 p-1'>
            <img src={addTask}
              className='scale-75'
            />
          </div>
          <h2 className='font-outfit ml-1 font-bold pl-2 mt-2 text-sm'>Add new task</h2>
        </div>
        {isOpen && (
          <Modal closeModal={closeModal} />
        )}
      </main>
    </>
  )
}

export default App;