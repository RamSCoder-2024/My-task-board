import express from 'express';
import { addTask } from '../controllers/task_controller.js';

const taskRouter = express.Router();

taskRouter.post('/addTask', addTask);

export default taskRouter;