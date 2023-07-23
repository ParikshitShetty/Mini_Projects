import { ERASER, UPDATE_ACTIVE, UPDATE_COMPLETED } from "../actionTypes/actionTypes";

const activeUpdater = (value) =>{
    return{
        type : UPDATE_ACTIVE,
        payload : value,
    }
}

const completedUpdater = (val) =>{
    return{
        type : UPDATE_COMPLETED,
        payload : val,
    }
}

const eraser = empty =>{
    return{
        type:ERASER,
        payload : empty,
    }
}
export {activeUpdater,completedUpdater,eraser};