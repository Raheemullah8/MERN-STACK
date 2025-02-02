import React from 'react'

function Header() {
  return(
    <>
    <nav className='flex justify-between py-5 px-5'>
        <div className='text-2xl font-bold '>
            <h1>Logo</h1>
        </div>
        <div className='flex justify-center text-2xl  gap-5'>
           <p>Home</p>
           <p>About</p>
           <p>Contect</p>
           <p>Portfolio</p>
        </div>
    </nav>
    </>
  )
}
export default Header