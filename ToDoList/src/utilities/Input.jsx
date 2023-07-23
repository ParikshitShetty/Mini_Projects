import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { TaskAdder } from '../redux/actions/ToDoAction';


const Input = () => {

    const [task,setTask] = useState('');
    
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        setTask(e.target.value);
    }

    const handleClick = (event) =>{
        if (event.key === 'Enter' && task.length > 0) {
            // console.log('✅ Enter key pressed');
            dispatch(TaskAdder({ 
                work : task,
                completed : false,
            }));
            setTask('');
        }
    }
    
    //console.log(task)

  return (
    <>

        <input type="text" className='h-8 rounded w-1/2 bg-slate-300 dark:bg-slate-600 font-semibold' value={task}
         onChange={handleChange} onKeyDown={handleClick} />
         
    </>
  )
}

export default Input