import React, { useState } from 'react';
import Modal from './Modal/Modal';
import './index.css'

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <main className='outline mt-10 p-4 w-full'>
        <h1 className='text-4xl text-left'>My task board</h1>
        <p className='text-left mb-7'>Tasks to keep organised</p>
        {/*  TAREAS  */}
        <div className='bg-slate-300 text-slate-900 text-left mb-6 p-2'>
          <h2 className='font-bold text-xl'>Task in Progress</h2>
          <p>Work on a Challenge.io learn Typescript</p>
        </div>
        {/***********/}
        <div onClick={openModal} className='bg-slate-300 text-slate-900 text-left cursor-pointer'>
          <h2 className='font-bold text-xl p-3'>Add new task</h2>
        </div>
        {isOpen && (
          <Modal closeModal={closeModal} />
        )}
      </main>
    </>
  )
}

export default App;