import React from 'react'

const Renderer = ({nameList,remove,update,itemIndex}) => {

  return (
    <>
    {nameList.map((name,index)=>(
          <div key={index} className='flex flex-col'>
            <div>
                <pre className='mb-3 flex flex-row'>
                    <span className={itemIndex==index ?`bg-red-400`:``}>
                        <p className='justify-center p-2'>{name}</p>
                    </span>
                    <span className=''>
                    <button className='rounded-lg outline outline-orange-600 p-2 ml-5 mr-3' onClick={()=>update(index)}>
                        Update</button>
                    <button className='rounded-lg outline outline-emerald-500 p-2' onClick={()=>remove(index)}>Delete</button>
                    </span>
                </pre>
            </div>
          </div>
        ))}
    </>
  )
}

export default Renderer