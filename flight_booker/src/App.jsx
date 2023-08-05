import { useState,useEffect } from 'react';
import Dropdown from './components/Dropdown';

function App() {
  const [flight, setFlight] = useState('one-way flight');
  const [journeyDate,setJourneyDate] = useState('');
  const [returnDate,setReturnDate] = useState('');
  const [inputStatus,setInputStatus] = useState(true);//to make the return date invalid
  const [returnValid,setReturnValid] = useState(false);
  const [booked,setBooked] = useState({
    journey : '',
    return : '',
  });

  const changeFlight = (event) =>{
    setFlight(event.target.value);
    if (event.target.value == 'return flight') {
      setInputStatus(false)
    }else{
      setInputStatus(true);
    }
  }

  const oneWayBook = (event) =>{
    setJourneyDate(event.target.value);
  }

  const returnBook = (event) =>{
    if (event.target.value > journeyDate) {
      setReturnDate(event.target.value);
      setReturnValid(false);
    }else{
      setReturnValid(true);
    }
  }

  const Book = () =>{
    if(journeyDate.length > 0 && returnDate.length>0 && !inputStatus){
      setBooked({
        ...booked,
        journey : journeyDate,
        return : returnDate
      })
    }else if(journeyDate.length > 0){
      setBooked({
        ...booked,
        journey : journeyDate,
        return : ''
      })
    }
  }

  useEffect(()=>{
    document.title = "Flight Booker"
  },[])
  
  return (
    <>
      <div className='bg-gray-950 min-h-screen flex flex-col justify-center place-items-center'>
        <h1 className='text-white mb-6 font-semibold text-2xl'>
            Flight Booker
        </h1>

        {booked.journey.length > 0 &&
        <span className='text-white mb-4'>You have booked a one-way ticket on {booked.journey} {booked.return.length>0 && 
        <p>and a return ticket on {booked.return}</p>}</span>
        }
        <div className='mb-4'>
          <Dropdown changeFlight={changeFlight}/>
        </div>
        <div className='mb-4 invalid'>
          <input type='date' onChange={oneWayBook} />
        </div>
        <div className='mb-4'>
          <input type="date" className={returnValid ? `bg-red-600 ` : ``} onChange={returnBook} disabled={inputStatus}/><br/>
          {returnValid &&
            <label htmlFor="" className='text-red-200 mt-1'>invalid date</label>
          }
        </div>
        <div className='text-white'>
          <button className={returnValid ? `bg-lime-800 rounded-lg py-2 px-5` : `bg-lime-600 rounded-lg py-2 px-5`} onClick={Book} disabled={returnValid}>Book</button>
        </div>
      </div>
    </>
  )
}

export default App
