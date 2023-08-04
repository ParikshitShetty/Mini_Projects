import React from 'react'

const Progress = ({time,gauge,change,maxVal}) => {
  return (
    <>
    <div>
        <label htmlFor="progress" className='mr-3'>Elapsed Time:</label>
        <progress value={change ? gauge : time} max={maxVal} className=''></progress>
    </div>
    </>
  )
}

export default Progress