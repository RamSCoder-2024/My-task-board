import React from 'react';
import { Task } from './App';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {

    let statusImg: string = ''; //Estado dinamico 
    let statusColor: string = ''; //Color de la task dinamico
    let sstatusColor: string = ''
    switch (task.status) {
        case 'In progress':
            statusImg = 'time.webp';
            statusColor = 'bg-progress';
            sstatusColor = 'bg-stprogress';
            break;
        case 'Completed':
            statusImg = 'done.webp';
            statusColor = 'bg-completed';
            sstatusColor = 'bg-stcompleted';
            break;
        case "Won't do":
            statusImg = 'close_round.webp';
            statusColor = 'bg-delete';
            sstatusColor = 'bg-stdelete';
            break;
        default:
            statusImg = '';
            statusColor = 'bg-defaultt';
            break;
    }

    return (
        <>
            <div className={`cursor-pointer rounded-xl items-start flex ${statusColor} text-slate-900 text-left mb-3 p-2`}>
                <div className='justify-center items-center flex bg-bgicon rounded-xl ml-1 h-9 w-12 p-1'>
                    <img src={`/icons/${task.icon}`} alt='icon' title='icon'
                        className='scale-75'
                    />
                </div>
                <div className='mt-1.5 ml-4 w-full flex flex-col items-start'>
                    <h2 className='font-outfit font-bold text-md'>
                        {task.title}
                    </h2>
                    <p className='font-outfit text-sm'>
                        {task.description}
                    </p>
                </div>
                <div className={`justify-center items-start flex ${sstatusColor} rounded-xl mr-1 h-9 w-12`}>
                    <img src={`/status/${statusImg}`} alt='status' title={task.status}
                        className='scale-75'
                    />
                </div>
            </div>
        </>
    )
}

export default TaskItem;
