// import React from 'react'
// // import { TbLetterC } from 'react-icons/tb'
import React, { useState } from 'react';

const App = () => {


  let sayhii =(name)=>{
    alert('hii say'+name)

  }


 const [count, setCount] = useState(0); // initial value = 0

  // function to increase count
  const inc = () => {
    setCount(count + 1);
  };

  return (
    <>
    <div>state</div>
    <button onClick={(say)=>alert('hello')}>click</button>
    <button onClick={sayhii}>click</button>
     <button onClick={()=>sayhii('sayali')}>click</button>
      <button onClick={inc}>increment</button>
      <h1>{count}</h1>

    </>
  )
}

export default App

