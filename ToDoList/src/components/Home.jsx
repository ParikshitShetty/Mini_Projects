import React from 'react'
import Input from '../utilities/Input'
import { useSelector } from 'react-redux'
import TaskRenderer from '../utilities/TaskRenderer'
import Buttons from '../utilities/Buttons'


const Home = () => {

    const tasks = useSelector((state) => state.ToDoReducer)
    console.log(tasks.taskList)

  return (
    <>
        <div className='flex flex-col border-2 rounded-md h-full md:w-1/2 z-20'>
            <div className='flex justify-center mt-4'>
                <Input/>
            </div>
            <div className='flex-1 mb-3 mt-3 '>
                <TaskRenderer/>
                <Buttons/>
            </div>
            
        </div>
    </>
  )
}

export default Home