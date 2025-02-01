import React from 'react'
import { useState } from 'react'

function App() {
  const [username,setUsername] = useState("")
  const handleForm = (e)=>{
    e.preventDefault()
    console.log(username)
    setUsername("")

  }
  return (
    <div className='h-screen w-full bg-gray-300'>
      <form onSubmit={(e)=>{
           handleForm(e)
      }}>
      <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} className='px-5 mx-10 border border-red-500 text-xl py-3 my-10' placeholder='Enter your name' />
      <button className='px-6 py-4 rounded-xl text-white bg-green-500'>Submit</button>
      </form>
    </div>
  )
}

export default App