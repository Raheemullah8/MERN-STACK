import React from 'react';


function ListTask() {
  return (
    <div 
      id='taskid' 
      className='h-[55%] overflow-x-auto flex justify-start items-center   gap-5 w-full py-5  mt-10  flex-nowrap'
    >
      <div className='h-full flex flex-col shrink-0 w-[300px] p-5 rounded-xl bg-red-400'>
       <div className='flex w-full justify-between'>
        <h3 ><span className='bg-red-500 rounded-2xl text-sm px-3 py-1 '>heigh</span></h3>
        <h4 className='text-sm'>20 feb 2024</h4>
       </div>
       <h2 className='mt-5 text-2xl font-semibold'>
          Make A youtube video
       </h2>
       <p className='text-sm mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
       
      </div>
      <div className='h-full flex flex-col shrink-0 w-[300px] p-5 rounded-xl bg-green-400'>
       <div className='flex w-full justify-between'>
        <h3 ><span className='bg-red-500 rounded-2xl text-sm px-3 py-1 '>heigh</span></h3>
        <h4 className='text-sm'>20 feb 2024</h4>
       </div>
       <h2 className='mt-5 text-2xl font-semibold'>
          Make A youtube video
       </h2>
       <p className='text-sm mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
       
      </div>
      <div className='h-full flex flex-col shrink-0 w-[300px] p-5 rounded-xl bg-yellow-400'>
       <div className='flex w-full justify-between'>
        <h3 ><span className='bg-red-500 rounded-2xl text-sm px-3 py-1 '>heigh</span></h3>
        <h4 className='text-sm'>20 feb 2024</h4>
       </div>
       <h2 className='mt-5 text-2xl font-semibold'>
          Make A youtube video
       </h2>
       <p className='text-sm mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
       
      </div>
      <div className='h-full flex flex-col shrink-0 w-[300px] p-5 rounded-xl bg-blue-400'>
       <div className='flex w-full justify-between'>
        <h3 ><span className='bg-red-500 rounded-2xl text-sm px-3 py-1 '>heigh</span></h3>
        <h4 className='text-sm'>20 feb 2024</h4>
       </div>
       <h2 className='mt-5 text-2xl font-semibold'>
          Make A youtube video
       </h2>
       <p className='text-sm mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
       
      </div>
      
    </div>
  );
}

export default ListTask;
