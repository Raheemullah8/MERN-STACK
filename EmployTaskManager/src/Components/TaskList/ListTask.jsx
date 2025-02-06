import React from 'react'

function ListTask() {
  return (
   
    <div 
    id='taskid' 
    className='h-[52%] flex justify-start items-start gap-5 w-full py-5 bg-red-400 mt-10 overflow-x-auto whitespace-nowrap'
  >
    <div className='h-full flex shrink-0 w-[300px] rounded-xl bg-yellow-500'></div>
    <div className='h-full flex shrink-0 w-[300px] rounded-xl bg-yellow-500'></div>
    <div className='h-full flex shrink-0 w-[300px] rounded-xl bg-yellow-500'></div>
    <div className='h-full flex shrink-0 w-[300px] rounded-xl bg-yellow-500'></div>
    <div className='h-full flex shrink-0 w-[300px] rounded-xl bg-yellow-500'></div>
    <div className='h-full flex shrink-0 w-[300px] rounded-xl bg-yellow-500'></div>
    <div className='h-full flex shrink-0 w-[300px] rounded-xl bg-yellow-500'></div>
  </div>
    
  )
}

export default ListTask