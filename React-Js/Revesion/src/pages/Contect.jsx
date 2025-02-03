import React, { useContext } from 'react'
import { userData } from '../context/UserContext'


function contect() {
    const data = useContext(userData)
    console.log(data)
  return (
    <div>
    <h1 className='text-3xl'>contect</h1>
    <h1 className='text-3xl'>context Data {data}</h1>
    </div>
  )
}

export default contect