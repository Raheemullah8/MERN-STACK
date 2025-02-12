import React from 'react'

function Header({data}) {
  return (
    <div className='flex item-center justify-between'>
    <h1 className='text-2xl font-medium'>Hello  <br/><span className='text-3xl font-semibold'>{data.firstname} 👋</span></h1>
    <button className='bg-red-600 px-4 text-lg font-medium h-10 rounded-md text-white '>Logout</button>
    </div>
  )
}

export default Header