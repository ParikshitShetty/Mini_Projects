import { ERASER, UPDATE_ACTIVE, UPDATE_COMPLETED } from "../actionTypes/actionTypes";

const initialState ={
    taskHandler : [],
    render : false,
}

const ActiveReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_ACTIVE:
            return{
                ...state,
                taskHandler : action.payload,
                render : true,
            }
        
        case UPDATE_COMPLETED:
            return{
                ...state,
                taskHandler : action.payload,
                render : true,
            }
        
        case ERASER:
            return{
                ...state,
                taskHandler : action.payload,
                render : false,
            }
    
        default:
            return state;
    }
}
export default ActiveReducer;