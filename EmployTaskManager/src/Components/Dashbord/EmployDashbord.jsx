import React from 'react'
import Header from '../others/Header'
import CountTask from '../others/CountTask'
import ListTask from '../TaskList/ListTask'

function EmployDashbord() {
  return (
    <div className='py-5 px-5 h-screen bg-[#1c1c1c]' >
        <Header/>
        <CountTask/>
        <ListTask/>

    </div>
  )
}

export default EmployDashbord