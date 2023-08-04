import { useState,useEffect } from 'react'
import Progress from './components/Progress';

function App() {
  const [time, setTime] = useState(0);
  const [gauge,setGauge] = useState(10);
  const [change,setChange] = useState(false);
  const maxVal = 60;

  useEffect(() => {
    document.title ='Timer';
    const intervalID = setInterval(incrementTime, 100);
    return () => {
      clearInterval(intervalID)
    }
  }, [])

  const incrementTime = () =>{
    setTime(prevTime => prevTime + 0.1);
  }

  const reset = () =>{
    setTime(0);
    setGauge(0);
    setChange(false);
  }

  const changeHandler = (event) =>{
    setGauge(maxVal - event.target.value);
    setChange(true);
  }

  useEffect(()=>{
    if (change) {
      let interval = setInterval(() => {
        setGauge(prevGauge => prevGauge + 0.1)
      }, 100);
      return()=>{
        clearInterval(interval)
      }
    } 
  },[change])

  // console.log(gauge);

  return (
    <>
      <div className='flex flex-col bg-gray-800 min-h-screen text-white justify-center place-items-center'>
        <div>
          <Progress time={time} gauge={gauge} change={change} maxVal={maxVal}></Progress>
        </div>
        <div className='mt-2'>
          <p>{time.toFixed(1)} s</p>
        </div>
        <div className='mt-5'>
        <input type='range' max={maxVal} 
        //  onMouseEnter={()=>setChange(true)} onMouseLeave={()=>setChange(false)}
          onChange={changeHandler}></input>
        </div>
        <div className='mt-4'>
          <input type='reset' onClick={reset} className='outline p-2 rounded-lg outline-red-600' />
        </div>
      </div>
    </>
  )
}
export default App