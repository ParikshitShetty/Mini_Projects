import React from 'react'

const Search = ({handleChange,firstName,handleSubmit,lastName,changed}) => {
  return (
    <>
    <div className='flex flex-col'>
        <span className='mt-auto'>
        <label htmlFor="name">Name</label>
        <input type="text" id='first' className='bg-gray-400 text-black ml-6' onChange={handleChange} value={firstName}/>
        </span><br />
        <span className=''>
            <label htmlFor="surname">Surname</label>
            <input type="text" id='second' className='bg-gray-400 ml-1 mt-2 text-black' value={lastName} onChange={handleChange}/>
        </span><br />
        <input type="button" value={changed ? `Update`:`Create`} className='rounded-xl bg-blue-700 mt-4 p-1.5' onClick={handleSubmit}/>
    </div>
    </>
  )
}
export default Search;