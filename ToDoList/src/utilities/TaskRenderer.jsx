import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TaskUpdater } from '../redux/actions/ToDoAction';

const TaskRenderer = () => {
    const tasks = useSelector((state) => state.ToDoReducer);

    const actComp = useSelector((state) => state.ActiveReducer);

    const dispatch = useDispatch();

    const statusChanger = (ind) =>{
        let updatedArray = tasks.taskList.map((task, index) => {
            if (index === ind) {
            return {
                ...task,
                completed: !task.completed 
            };
            }
            return task; 
        });
            dispatch(TaskUpdater(updatedArray));
            //console.log(updatedArray)      
    }

  return (
    <>
    <div className='flex flex-col'>
        {actComp.render ?
        actComp.taskHandler.map((item,index)=>(
            <div key={index} className='flex'  >
                <div className='basis-100 flex justify-end '>
                    <input type="checkbox" className='mr-5 text-lg' checked={item.completed} onChange={() => statusChanger(index)}/>
                </div>
                <div className='basis-3/4 flex justify-start '>
                    <label className={`font-serif text-lg ${item.completed ? 'line-through ' : '' }`}>{item.work}</label>
                </div>
            </div> 
        ))
        :
        tasks.taskList.length>0 &&
        tasks.taskList.map((item,index)=>(
            <div key={index} className='flex '>
                <div className='basis-100 flex justify-end '>
                    <input type="checkbox" className='mr-5 text-lg ' checked={item.completed} onChange={() => statusChanger(index)}/>
                </div>
                <div className='basis-3/4 flex justify-start '>
                    <label className={`font-serif text-lg ${item.completed ? 'line-through ' : '' }`}>{item.work}</label>
                </div>
                
            </div>
        ))}
    </div> 
    </>
  )
}

export default TaskRenderer