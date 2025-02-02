import React from 'react'

function Card(props) {
    const {name,age,img,isStudent} = props.userData
  return (
    <div className='mx-5 bg-black text-white w-50 h-60 text-center rounded-3xl p-5'>
     <img src={img} alt={name} className="mx-auto rounded-full w-24 h-24" />
    <h2>{name}</h2>
    <h3>{age}</h3>
    <h3>{isStudent}</h3>
    <button className='bg-green-400 rounded-2xl px-2 py-2'>Submit</button>
    </div>
  )
}

export default Card