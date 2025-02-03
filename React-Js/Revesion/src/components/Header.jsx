import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return(
    <>
    <nav className='flex justify-between bg-amber-600 text-white items-center w-full h-5 py-5 px-5'>
        <div className='text-2xl font-bold '>
            <h1>Logo</h1>
        </div>
        <div className='flex justify-center text-2xl  gap-5'>
           <Link to={"/"}>Home</Link>
           <Link to={"/cards"}>Cards</Link>
           <Link to={"/about"}>About</Link>
           <Link to={"/contect"}>Contect</Link>
           
        </div>
    </nav>
    </>
  )
}
export default Header