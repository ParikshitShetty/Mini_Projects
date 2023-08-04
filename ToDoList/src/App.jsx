import { useEffect, useState } from 'react'
import Home from './components/Home'


function App() {

  useEffect(()=>{
    document.title = "ToDoList";
  },[]);

  return (
    <>
    <div className='flex justify-center place-items-center bg-gray-400 dark:bg-slate-800 min-h-screen dark:text-white  text-center'>
        <Home/>
    </div>
    </>
  )
}

export default App
