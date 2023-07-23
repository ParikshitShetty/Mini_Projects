import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "../actionTypes/actionTypes"

const TaskAdder = (task) =>{
    return{
        type : ADD_TASK,
        payload : task,
    }
}

const TaskRemover = (tasks) =>{
    return{
        type : REMOVE_TASK,
        payload : tasks,
    }
}

const TaskUpdater = (updatedTask) =>{
    return{
        type : UPDATE_TASK,
        payload : updatedTask,
    }
}
export {TaskAdder,TaskRemover,TaskUpdater};