import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "../actionTypes/actionTypes"


const initialState={
    taskList : [],
}

const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return{
                ...state,
                taskList : [...state.taskList, action.payload],
            }
  
        case REMOVE_TASK:
            return{
                ...state,
                taskList : action.payload,
            }
        
        case UPDATE_TASK :
            return{
                ...state,
                taskList : action.payload,
            }
        
        default:
            return state;
    }
}
export default ToDoReducer;

// taskList : state.taskList.map((task,index)=>{
//     index == action.payload ? {...task, completed : true} : task
// })