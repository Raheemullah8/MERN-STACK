import React, { useState } from 'react'


function App() {
  const [Num,setNum] = useState(10);
  return (

    <div>
      <h1>Counter {Num}</h1>
      <button onClick={()=>(setNum(Num-1))}>DEC</button>
      <button onClick={()=>(setNum(Num+1))} >INC</button>
    </div>
  )
}

export default App