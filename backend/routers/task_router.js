import express from 'express';
import { addTask, allTasks } from '../controllers/task_controller.js';

const taskRouter = express.Router();

taskRouter.post('/addTask', addTask);
taskRouter.get('/getAllTasks', allTasks);

export default taskRouter;