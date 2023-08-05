import React from 'react'

const Dropdown = ({changeFlight}) => {
  return (
    <>
        <select name="" id="" onChange={changeFlight}>
            <option value="one-way flight">one-way flight</option>
            <option value="return flight">return flight</option>
        </select>
    </>
  )
}

export default Dropdown