import React from 'react'

function NewTask({data}) {
  return (
    <div className='h-full flex flex-col shrink-0 w-[300px] p-5 rounded-xl bg-green-400'>
    <div className='flex w-full justify-between'>
     <h3 ><span className='bg-red-500 rounded-2xl text-sm px-3 py-1 '>{data.category}</span></h3>
     <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>
       {data.taskTitle}
    </h2>
    <p className='text-sm mt-2'>{data.taskDescription}</p>
    <div className='flex justify-between mt-5'>
        <button className=''>AcceptTask</button>
    </div>
   </div>

  )
}

export default NewTask