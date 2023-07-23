import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TaskRemover } from '../redux/actions/ToDoAction';
import { activeUpdater, completedUpdater, eraser } from '../redux/actions/ActiveAction';

const Buttons = () => {
    const tasks = useSelector((state) => state.ToDoReducer);

    const actComp = useSelector((state) => state.ActiveReducer);

    const dispatch = useDispatch();

    let updatedArray=[];

    const Clear = () =>{
        updatedArray = tasks.taskList.filter((task)=>task.completed == false);
        //console.log(updatedArray)
        dispatch(TaskRemover(updatedArray))
    }

    const Completed = () =>{
        updatedArray = tasks.taskList.filter((task)=>task.completed == true)//completed = true are completed
        //console.log(updatedArray)
        dispatch(completedUpdater(updatedArray))
        //console.log(actComp)
    }

    const Active = () =>{
        updatedArray = tasks.taskList.filter((task)=>task.completed == false)//completed = false are active
        //console.log(updatedArray)
        dispatch(activeUpdater(updatedArray))
        //console.log(actComp)
    }

    const All = () =>{
        dispatch(eraser(updatedArray))
        //console.log(updatedArray)
    }

  return (
    <>
    <div className='flex justify-center mt-6'>
    <button className="bg-cyan-600 rounded-md px-12 py-1,5 mr-3 " onClick={All} >
           All</button>

    <button className="bg-amber-600 rounded-md p-12 py-1.5 mr-3" onClick={Active} >
           Active</button>

    <button className="bg-emerald-600 rounded-md px-7 py-1.5 mr-3" onClick={Completed} >
           Completed</button>

        <button className="bg-red-500 rounded-md p-1.5" onClick={Clear} >
           Clear Completed</button>
    </div>
    </>
  )
}

export default Buttons