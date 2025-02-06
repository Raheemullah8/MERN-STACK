import React from 'react'
import Header from '../others/Header'
import TaskList from '../others/TaskList'
import ListTask from '../TaskList/ListTask'

function EmployDashbord() {
  return (
    <div className='py-5 px-5 h-screen bg-[#1c1c1c]' >
        <Header/>
        <TaskList/>
        <ListTask/>

    </div>
  )
}

export default EmployDashbord